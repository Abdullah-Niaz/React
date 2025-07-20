import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css'; 

function App() {
  const [counter, setCounter] = useState(2);
  const min = 0;
  const max = 5;

  const addValue = () => {
    if (counter < max) setCounter(prev => prev + 1);
  };

  const removeValue = () => {
    if (counter > min) setCounter(prev => prev - 1);
  };

  useEffect(() => {
    console.log('Counter updated:', counter);
  }, [counter]);

  return (
    <div classNameName="flex flex-col items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white font-sans px-4">
      <header classNameName="flex items-center gap-4 mb-10">
        <img src={reactLogo} classNameName="h-10 animate-spin-slow" alt="React Logo" />
        <img src={viteLogo} classNameName="h-10" alt="Vite Logo" />
        <h1 classNameName="text-4xl font-bold tracking-wide">React Counter App</h1>
      </header>

      <main classNameName="bg-white text-gray-900 rounded-3xl p-10 shadow-2xl w-full max-w-md text-center">
        <h2 classNameName="text-2xl font-semibold mb-6">
          Counter Value: <span classNameName="text-indigo-600 font-bold">{counter}</span>
        </h2>
        <div classNameName="flex flex-col sm:flex-row gap-6 justify-center">
          <button
            onClick={addValue}
            disabled={counter >= max}
            classNameName={`w-full sm:w-1/2 px-5 py-3 rounded-full text-white text-lg font-semibold transition duration-300
              ${counter >= max
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700'}`}
          >
            ➕ Add
          </button>
          <button
            onClick={removeValue}
            disabled={counter <= min}
            classNameName={`w-full sm:w-1/2 px-5 py-3 rounded-full text-white text-lg font-semibold transition duration-300
              ${counter <= min
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700'}`}
          >
            ➖ Remove
          </button>
        </div>
      </main>

      <footer classNameName="mt-12 text-sm text-white opacity-70">
        Built with 💙 using React + Vite + Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
