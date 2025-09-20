# 💰 Cloud Wallet App

A **mobile wallet application** that allows users to **manage transactions** easily. Built with **React Native** and **Expo**, the app supports **adding, editing, deleting, and authenticating transactions**, along with tracking **income, expenses, and balance**.

---

## **Features**

- **Add Transactions** – Create a transaction with **category, amount, and comments**.  
- **Edit Transactions** – Update existing transactions anytime.  
- **Delete Transactions** – Remove unwanted or wrong transactions.  
- **Transaction Authentication** – Verify transactions with **Clerk OTP**.  
- **View Totals** – Monitor **total expenses, total income, and balance**.  
- **Category Management** – Organize transactions by categories like Food, Bills, Shopping, etc.  
- **Real-Time Updates** – Changes sync instantly across the app.  
- **User-Friendly UI** – Simple and responsive interface for mobile devices.

---

## **Tech Stack**

- **Frontend:** React Native, Expo  
- **Backend & Database:** Convex (Serverless real-time database) or your preferred backend  
- **State Management:** React Hooks / Context API  
- **UI & Styling:** Tailwind CSS (via `tailwind-rn`) or React Native `StyleSheet`  
- **Authentication:** OTP-based transaction verification  

---

## **Screenshots**

_Add screenshots of your app here_  

- **Add Transaction Screen**  
- **Transaction List Screen**  
- **Edit Transaction Screen**  
- **OTP Verification Screen**  
- **Balance & Expense Summary Screen**

---

## **Installation**

1. **Clone the repository:**


git clone https://github.com/yourusername/cloud-wallet-app.git
cd cloud-wallet-app


npm install
# or
yarn install

expo start

Run on a device/emulator
Use the Expo Go app on your mobile device
Or run on Android/iOS emulator from your computer

Usage
Open the app on your device.
Add a new transaction using the Add Transaction button.
Edit an existing transaction by tapping it.
Delete a transaction using the Delete button.
Verify transactions using Clerk OTP.
Check total income, expenses, and current balance.
Filter transactions by category or date.

Future Enhancements
Monthly / weekly expense reports
Recurring transactions
Budget planning and notifications
Export transactions to CSV or PDF
Dark mode and theme toggle

Contributing
Contributions are welcome
Fork the repository
Create a feature branch (git checkout -b feature-name)
Commit your changes (git commit -m "Add feature")
Push to the branch (git push origin feature-name)
Open a Pull Request
