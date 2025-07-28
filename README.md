# 🧾 AutoWill – Decentralized Will Executor on Massa Blockchain

**AutoWill** is a decentralized application (dApp) that allows users to create digital wills directly on the **Massa blockchain**. This application enables secure, trustless transfers of MAS tokens to a beneficiary wallet address after a user-defined unlock time.

---

## 🚀 Features

- 📝 Create digital wills with:
  - Beneficiary Massa address
  - Amount in MAS tokens
  - Optional personal message
  - Future unlock timestamp
- 🔐 Trustless execution on the Massa smart contract layer
- 📅 Friendly date/time picker for unlock scheduling
- ✅ Validates Massa wallet addresses
- 📡 Massa `massa-web3` SDK integration
- 📤 Deploy and interact with real smart contracts
- 🧾 Read & Withdraw functionality (coming next)
- 🌐 Responsive frontend built with React & Tailwind CSS

---

## 🛠️ Technologies Used

| Component     | Technology         |
|---------------|--------------------|
| Blockchain    | [Massa Network](https://massa.net/) |
| Smart Contracts | WebAssembly (AssemblyScript) |
| Frontend      | React + TypeScript |
| Wallet & Chain Integration | [`massa-web3`](https://www.npmjs.com/package/@massalabs/massa-web3) |
| UI Framework  | Tailwind CSS       |
| Date Picker   | `react-datepicker` |




## 📦 Installation & Setup

### Prerequisites

- Node.js v18+
- Massa node & client running locally OR access to Massa buildnet/testnet
- Git

---

### 1. Clone the repository

```bash
git clone https://github.com/your-username/autowill-massa.git
cd autowill-massa




2. Install dependencies

cd frontend
npm install


 Start the frontend

npm run dev

Open http://localhost:3000 to view it in the browser.


Massa Node/Client Setup

Make sure you are running a local Massa node and client. You can use the official Massa node setup guide.

You must also update your .env or wallet provider config to point to the correct RPC/REST endpoint (e.g., http://127.0.0.1:33035).

📄 Smart Contract (AssemblyScript)

The smart contract is deployed using massa-sc-runtime and contains logic to store will data and release funds after unlock time.

    Coming soon: Will contract source code and deployment instructions.

🧪 Testing

    Connect with a funded Massa wallet

    Fill in:

        Valid Massa address

        Amount (MAS)

        Message (optional)

        Unlock time using the datepicker

    Click Submit Will

    Watch for confirmation or errors

❓How It Works

    User fills in will details.

    Frontend validates address and formats data.

    Smart contract is called with stored values using massa-web3.

    Funds are locked and only withdrawable after unlock time.

    Users will later be able to read their wills and withdraw unlocked assets.

⚠️ Known Issues

    Contract address must be correctly configured in the code 

    Currently supports buildnet/testnet; mainnet integration pending

    Full Withdraw and Read functionality still under final testing

📌 Future Roadmap

     Add contract event listener to show status

    Deploy smart contract to buildnet

     Enable reading of wills per user wallet

    Enable claiming/withdrawing when time unlocks

    Add MNS (Massa Name Service) support

    Improve error handling and edge case validation

🙌 Team

Built by the AutoWill Team as part of the Massa Hackathon.
