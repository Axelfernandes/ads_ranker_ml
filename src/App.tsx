import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import FeedPage from './FeedPage';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        {({ signOut, user }) => (
          <main className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm p-4 flex justify-between items-center">
              <span className="font-bold text-xl text-blue-600">RankerAds</span>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Hello, {user?.username}</span>
                <button 
                  onClick={signOut}
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded text-sm transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </header>
            <FeedPage />
          </main>
        )}
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
