import { useState } from 'react';
import Portfolio from "./pages/Portfolio";
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {!isLoading && <Portfolio />}
      {isLoading && (
        <button
          onClick={() => {
            setIsLoading(false);
          }}
          className="fixed top-6 right-6 z-10000 px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-400 text-sm rounded-lg border border-gray-700 hover:border-[#27CBCB] hover:text-[#27CBCB] transition-all duration-300"
        >
          Skip Intro
        </button>
      )}
    </div>
  );
};

export default App;