# AIFNF API - AI Financial Neural Framework

AIFNF (**AI Financial Neural Framework**) is a decentralized AI-powered trading system operating in the **Solana ecosystem**. This API allows users to run multiple **AI trading strategies**, fetch **real-time Solana data**, and manage trade history.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Run the Project](#run-the-project)

---

## Features
- Run multiple **AI Trading Strategies**
- Store **trade history** in MongoDB
- Fetch **real-time SOL balance** and transactions
- **REST API** architecture with Express.js
- Secure connection with **CORS and dotenv**
- Implemented with **TypeScript and Express.js**
- **MongoDB** for Trade History Storage  

---

## Project Structure
```
AIFNF-API/
│── backend/
│   ├── src/
│   │   ├── controllers/        # Business logic
│   │   │   ├── aiController.ts
│   │   │   ├── solanaController.ts
│   │   ├── models/             # Database models
│   │   │   ├── Trade.ts
│   │   ├── routes/             # API routes
│   │   │   ├── aiRoutes.ts
│   │   │   ├── solanaRoutes.ts
│   │   ├── ai/                 # AI Trading Strategies
│   │   │   ├── 001.ts
│   │   │   ├── SAM.ts
│   │   │   ├── IVY.ts
│   │   │   ├── JEFF.ts
│   │   ├── config/             # Database and API Configurations
│   │   │   ├── db.ts
│   │   ├── index.ts            # Main Entry Point
│   ├── .env                    # Environment Variables
│   ├── package.json            # Dependencies
│   ├── tsconfig.json           # TypeScript Configuration
│   ├── README.md               # Documentation
│   ├── nodemon.json            # Nodemon Configuration
```

## Installation

First, **clone** the repository:
```sh
git clone https://github.com/AIFNF/AI-FNF.git
cd AI-FNF
```

Then, **install dependencies**:
```sh
npm install
```

## Environment Variables

Create a `.env` file in the `backend/` directory:
```ini
PORT=5000
MONGO_URI=mongodb://localhost:27017/aifnf
SOLANA_RPC_URL=https://api.mainnet-beta.solana.com
```

## API Endpoints

### **AI Trading API**

| Method | Endpoint | Description |
|--------|---------|-------------|
| `POST` | `/api/run-ai` | Run AI Trading Strategy |
| `GET`  | `/api/trade-history/:user` | Get User's Trading History |

### **Solana API**

| Method | Endpoint | Description |
|--------|---------|-------------|
| `GET`  | `/api/solana/balance/:address` | Get SOL Balance |
| `GET`  | `/api/solana/transactions/:address` | Get Recent Transactions |

## Usage

### Run AI Trading Strategy
```sh
curl -X POST "http://localhost:5000/api/run-ai" \
     -H "Content-Type: application/json" \
     -d '{
          "user": "user123",
          "aiName": "SAM",
          "params": { "stopLoss": "5%" }
        }'
```

### Fetch SOL Balance
```sh
curl -X GET "http://localhost:5000/api/solana/balance/FakeSolanaAddress123"
```

### Fetch Recent Transactions
```sh
curl -X GET "http://localhost:5000/api/solana/transactions/FakeSolanaAddress123"
```

## Run the Project

### Start Server (Development Mode)
```
npm run dev
```

OR  
```
npx ts-node src/index.ts
```

### Start Server (Production Mode)
```
npm run build
npm start
```