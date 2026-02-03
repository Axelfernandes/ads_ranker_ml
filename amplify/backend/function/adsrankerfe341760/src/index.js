const { cosineSimilarity } = require('./utils');

// Mocking SageMaker Runtime for now since we aren't calling the real endpoint yet
// const AWS = require('aws-sdk');
// const sagemaker = new AWS.SageMakerRuntime();

const AD_EMBEDDINGS = JSON.parse(process.env.AD_EMBEDDINGS || '[]');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const { userId } = event.arguments || {};
  
    if (!userId) {
        return getPopularAds();
    }

    try {
        // 1. Get user data (Mocked)
        const user = {
            interests: ['tech', 'music'],
            sequence: ['ad1', 'ad5']
        };
        
        // 2. Retrieval: MiniLM similarity
        // Mocking user embedding (384 dimensions)
        const userEmb = new Array(384).fill(0).map(() => Math.random() - 0.5);
        
        // Calculate scores against the environment variable embeddings
        const scores = AD_EMBEDDINGS.map((emb) => cosineSimilarity(userEmb, emb.embedding));
        
        const top50 = scores.map((s, i) => ({ 
            id: AD_EMBEDDINGS[i].id, 
            score: s, 
            category: AD_EMBEDDINGS[i].category,
            title: AD_EMBEDDINGS[i].title
        }))
        .sort((a, b) => b.score - a.score).slice(0, 50);

        // 3. Re-ranking: BERT (Mocked re-ranking boost)
        const reranked = top50.slice(0, 20).map(ad => ({
            ...ad,
            score: ad.score * 0.3 + Math.random() * 0.7 // Mock BERT boost
        }));

        // 4. Fairness
        const final = applyFairness(reranked.sort((a, b) => b.score - a.score).slice(0, 15));
        
        console.log("Ranking successful, returning items:", final.length);
        return final.slice(0, 10);
    } catch (error) {
        console.error("Ranking error:", error);
        return getPopularAds();
    }
};

const applyFairness = (candidates) => {
    const categories = new Map();
    return candidates.filter(c => {
        const catCount = categories.get(c.category) || 0;
        if (catCount < 2) {
            categories.set(c.category, catCount + 1);
            return true;
        }
        return Math.random() > 0.5;
    });
};

const getPopularAds = () => {
    return [
        { id: 'ad1', title: 'iPhone 16 Pro', score: 0.9, category: 'tech' },
        { id: 'ad2', title: 'AirPods Max', score: 0.8, category: 'tech' }
    ];
};
