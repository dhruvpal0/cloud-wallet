import express from "express";
import dotenv from "dotenv";
import { initDB } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import transactionsRoute from "./routes/transactionsRoute.js";

dotenv.config();
const app = express();

// middleware
app.use(rateLimiter);
app.use(express.json());

// our custom simple middleware
app.use((req, res, next) => {
    console.log("Hey we hit a req, the method is", req.method)
    next();
})

const port = process.env.PORT || 5001;



// app.get("/health", (req, res) => {
//     res.send("its working")
// });

app.use("/api/transactions", transactionsRoute);

initDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});
