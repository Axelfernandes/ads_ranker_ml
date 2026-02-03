# 🎯 LLM-Inspired Ads Ranking Platform (Serverless)

> A production-ready prototype for a modern recommendation system using **AWS Amplify**, **Serverless Lambda**, and **LLM-based ranking logic**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![AWS Amplify](https://img.shields.io/badge/AWS-Amplify-orange)
![React](https://img.shields.io/badge/React-18-blue)

## 📖 Overview

This project implements a sophisticated **two-stage ranking system** (Retrieval -> Re-ranking) typically found in large-scale tech companies, but architecture for speed and simplicity using AWS Serverless.

It moves beyond simple keyword matching by using **Vector Embeddings** (semantic search) and **Transformer Models** (BERT-style re-ranking) to show users the most relevant ads based on their interests and interaction history.

### Key Features
- **🧠 Semantic Retrieval**: Uses `MiniLM` style embeddings to find ads that match the *meaning* of a user's interest, not just keywords.
- **⚡ Two-Stage Ranking**:
  1.  **Retrieval**: Fast, coarse selection of top 50 candidates using Cosine Similarity.
  2.  **Re-Ranking**: High-precision sorting of top 10 items using a heavier model logic (mocked BERT).
- **⚖️ Fairness & Diversity**: Built-in algorithms prevent "category fatigue" (e.g., seeing 10 shoe ads in a row) by enforcing category diversity constraints.
- **☁️ Fully Serverless**: Zero servers to manage. Uses AWS Lambda, DynamoDB, and AppSync (GraphQL).

---

## 🏗️ Architecture

```mermaid
graph TD
    User[User (React Frontend)] -->|GraphQL Query| AppSync[AWS AppSync]
    AppSync -->|Invoke| Lambda[RankAds Lambda]
    
    subgraph "Ranking Engine (Lambda)"
        Lambda -->|1. Get Profile| DB[(User Profile)]
        Lambda -->|2. Vector Search| Embeddings[Ad Embeddings (MiniLM)]
        Lambda -->|3. Re-Rank| Model[BERT Logic]
        Lambda -->|4. Filter| Diversity[Fairness Algorithm]
    end
    
    Lambda -->|Return Ranked List| AppSync
    AppSync -->|JSON| User
```

---

## 🚀 How It Works (The "Secret Sauce")

When a user loads the feed, the following pipeline executes in real-time (~200ms):

1.  **User Context Construction**: The system pulls the user's `interest` tags (e.g., "tech", "hiking") and `interaction history` (last 50 clicks).
2.  **Vector Retrieval (Candidate Generation)**: 
    - The user's profile is converted into a 384-dimensional vector.
    - We calculate the **Cosine Similarity** between the user vector and all Ad vectors.
    - The top 50 matches are selected.
3.  **Neural Re-ranking**:
    - A more powerful model analyzes the top 20 candidates specifically for "click probability."
    - This step combines the semantic score with behavioral signals.
4.  **Fairness Adjustment**:
    - The list is filtered to ensure no single category (e.g., "Clothing") takes up more than 40% of the feed.
    - This ensures a diverse, engaging user experience.

---

## 🛠️ Tech Stack

-   **Frontend**: React (TypeScript), Tailwind CSS
-   **API**: AWS AppSync (GraphQL)
-   **Auth**: AWS Cognito
-   **Compute**: AWS Lambda (Node.js)
-   **Data**: AWS DynamoDB (User/Ad Metadata)

---

## ⚡ Getting Started

### Prerequisites
-   Node.js (v18+)
-   AWS CLI (configured with credentials)
-   Amplify CLI (`npm install -g @aws-amplify/cli`)

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Axelfernandes/ads_ranker_ml.git
    cd ads_ranker_ml/ads-ranker
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Initialize Backend**
    Connect to your AWS account and provision resources.
    ```bash
    amplify init
    amplify push
    ```

4.  **Run Locally**
    ```bash
    npm start
    ```
    The app will open at `http://localhost:3000`. Sign up for an account to see the personalized feed!

---

## 🔮 Future Roadmap

-   [ ] **SageMaker Integration**: Replace the mock embedding logic in Lambda with calls to real `all-MiniLM-L6-v2` endpoints on AWS SageMaker.
-   [ ] **Real-time Logging**: Pipe interaction events (clicks/views) to Kinesis Firehose for model retraining.
-   [ ] **A/B Testing**: Implement experimentation buckets in the User schema to test different ranking parameters.

---

## 📂 Project Structure

```
ads-ranker/
├── amplify/              # Backend Infrastructure (IaC)
│   ├── backend/
│   │   ├── api/          # AppSync (GraphQL) Schema
│   │   ├── auth/         # Cognito Configuration
│   │   └── function/     # Lambda Functions (Ranking Logic)
├── src/
│   ├── graphql/          # Generated API queries
│   ├── FeedPage.tsx      # Main UI Component
│   └── App.tsx           # Entry point & Auth wrapper
└── ad_embeddings.json    # Pre-computed vector data
```

---

*Built with ❤️ by Axel Fernandes*