import React, { useState, useEffect } from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from 'aws-amplify/api';
import { getRankedAds } from './graphql/queries';

const client = generateClient();

const FeedPage = () => {
  const [ads, setAds] = useState<any[]>([]);
  const { user } = useAuthenticator(context => [context.user]);

  useEffect(() => {
    const fetchAds = async () => {
      if (user && user.userId) {
        try {
          const result = await client.graphql({
            query: getRankedAds,
            variables: { userId: user.userId }
          }) as any;
          setAds(result.data.getRankedAds || []);
        } catch (error) {
          console.error("Error fetching ranked ads:", error);
          // Fallback ads
          setAds([
            { id: 'ad1', title: 'iPhone 16 Pro', category: 'tech', score: 0.9 },
            { id: 'ad2', title: 'AirPods Max', category: 'tech', score: 0.8 },
          ]);
        }
      }
    };

    fetchAds();
  }, [user]);

  useEffect(() => {
    if (ads.length > 0) {
      ads.forEach(ad => console.log(`Logging impression for: ${ad.id}`));
    }
  }, [ads]);

  const logClick = (adId: string) => {
    console.log(`Logging click for: ${adId}`);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Ads Feed</h1>
      <div className="grid gap-4">
        {ads.map(ad => (
          <div 
            key={ad.id} 
            className="border p-4 rounded-lg shadow hover:shadow-md cursor-pointer transition-shadow bg-white"
            onClick={() => logClick(ad.id)}
          >
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold">{ad.title}</h2>
              <span className="text-xs font-mono text-gray-400">Score: {ad.score?.toFixed(3)}</span>
            </div>
            <p className="text-gray-600 mt-1">{ad.description || 'Recommended for you based on your interests.'}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mt-2">
              {ad.category}
            </span>
          </div>
        ))}
        {ads.length === 0 && (
          <p className="text-center text-gray-500 py-10">No ads found. Make sure you are signed in.</p>
        )}
      </div>
    </div>
  );
};

export default FeedPage;