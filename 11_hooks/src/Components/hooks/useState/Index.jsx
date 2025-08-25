import React, { useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-96 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">useState Hook</h1>


        <p className="text-5xl font-extrabold text-indigo-600 mb-6">{count}</p>


        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          placeholder="Enter step"
          className="w-full px-4 py-2 border rounded-xl mb-4 text-center text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />


        <div className="flex justify-between space-x-4">
          <button
            onClick={() => setCount(count - step)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-black py-2 rounded-xl shadow-md transition duration-200"
          >
            Decrement
          </button>

          <button
            onClick={() => setCount(0)}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-black py-2 rounded-xl shadow-md transition duration-200"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count + step)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-black py-2 rounded-xl shadow-md transition duration-200"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
