import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const PasswordGeneator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~@#$%^&*()_-=+{}[];'`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }

    setPassword(password);
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-lg px-6 py-4 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center text-2xl font-bold mb-6">Password Generator</h1>

        <div className="flex items-center gap-x-4 mb-6">
          <input
            type="text"
            value={password}
            className="w-full py-3 px-4 border border-gray-600 rounded-md bg-gray-900 text-white outline-none"
            placeholder="Generated Password"
            readOnly
          />
          <button
            className="ml-4 bg-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-800 transition-all"
            onClick={() => navigator.clipboard.writeText(password)}
          >
            Copy
          </button>
        </div>

        <div className="flex flex-col gap-y-4 mb-6">
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="numberAllowed"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="numberAllowed" className="text-white">Include Numbers</label>
          </div>
          <div className="flex items-center gap-x-2">
            <input
              type="checkbox"
              id="charAllowed"
              checked={charAllowed}
              onChange={(e) => setCharAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="charAllowed" className="text-white">Include Special Characters</label>
          </div>
        </div>

        <div className="flex items-center gap-x-2 text-sm mb-6">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="cursor-pointer"
          />
          <label htmlFor="length" className="text-white">Length: {length}</label>
        </div>

        <button
          onClick={PasswordGeneator}
          className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-md shadow-md hover:bg-orange-600 transition-all"
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
