// src/App.jsx
import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [converted, setConverted] = useState(0);

  const { currencyData, error } = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyData || {});

  const handleConvert = () => {
    if (!currencyData[toCurrency]) return;
    setConverted((amount * currencyData[toCurrency]).toFixed(2));
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setConverted(amount);
    setAmount(converted);
  };



  return (
    <div
       className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-[90%] max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          💱 Currency Converter
        </h1>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleConvert();
          }}
          className="space-y-4"
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={currencyOptions}
            onAmountChange={setAmount}
            onCurrencyChange={setFromCurrency}
            selectedCurrency={fromCurrency}
          />

          <div className="text-center">
            <button
              type="button"
              onClick={handleSwap}
              className="inline-block bg-blue-600 text-black px-4 py-1 rounded-md text-sm hover:bg-blue-700 transition"
            >
              ⬆️⬇️ Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={converted}
            currencyOptions={currencyOptions}
            onCurrencyChange={setToCurrency}
            selectedCurrency={toCurrency}
            disableAmount={true}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-black py-2 rounded-lg hover:bg-green-700 transition font-medium"
          >
            Convert {fromCurrency.toUpperCase()} ➜ {toCurrency.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
