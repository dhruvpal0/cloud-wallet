import * as BadWords from "bad-words";
import { sql } from "../config/db.js";

const filter = new BadWords.Filter();

export async function createTransaction(req, res) {
    try {
        // title, amount, user_id, 
        const { title, amount, category, user_id } = req.body;

        if (!title || !amount || !user_id || !category) {
            return res.status(400).json({ message: "All fields are required!" })
        }
        const fields = { title, amount: String(amount), category, user_id: String(user_id) };
        const badFields = Object.entries(fields)
            .filter(([key, value]) => filter.isProfane(value))
            .map(([key]) => key);

        if (badFields.length > 0) {
            console.log("Forbidden words found in:", badFields);
            return res.status(400).json({
                error: `Forbidden words detected in: ${badFields.join(", ")}`
            });
        }

        const transaction = await sql`
            INSERT INTO transactions(user_id,title,amount,category)
            VALUES (${user_id},${title},${amount},${category})
            RETURNING *`;

        res.status(201).json(transaction[0]);

    } catch (error) {
        console.log("Error creating the transactions", error);
        res.status(500).json({ message: `Internal server error ${error}` })
    }
}

export async function getTransactionsByUserId(req, res) {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const transactions = await sql`
            SELECT * FROM transactions WHERE user_id=${userId} ORDER BY created_at DESC`;

        res.status(200).json(transactions);

    } catch (error) {
        console.log("Error getting the transactions:", error.message);
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function deleteTransaction(req, res) {
    try {
        const { id } = req.params;

        if (isNaN(parseInt(id))) {
            return res.status(400).json({ message: "Invalid transaction Id" })
        }

        const result = await sql`
            DELETE FROM transactions WHERE id = ${id} RETURNING *`
        if (result.length === 0) {
            return res.status(404).json({ message: "transaction not found" });
        }
        res.status(200).json({ message: "transaction deleted successfully!" });

    } catch (error) {
        console.log("Error creating the transactions", error);
        res.status(500).json({ message: "Internal server error" })
    }
}

export async function getSummaryByUserId(req, res) {
    try {
        const { userId } = req.params;

        const balanceResult = await sql`
        SELECT COALESCE(SUM(amount),0) as balance FROM transactions WHERE user_id =${userId}`

        const incomeResult = await sql`
        SELECT  COALESCE(SUM(amount),0) as income FROM transactions WHERE user_id = ${userId} AND amount > 0`
        const expensesResult = await sql`
        SELECT  COALESCE(SUM(amount),0) as expenses FROM transactions WHERE user_id = ${userId} AND amount < 0`

        res.status(200).json({
            balance: balanceResult[0].balance,
            income: incomeResult[0].income,
            expenses: expensesResult[0].expenses,
        });

    } catch (error) {
        console.log("Error creating the transactions", error);
        res.status(500).json({ message: "Internal server error" })
    }
}
