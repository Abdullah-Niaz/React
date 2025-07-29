import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  disableAmount = false,
  disableCurrency = false,
}) {
  const inputId = useId();

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white/80 p-4 rounded-lg shadow-md">
      <div className="w-full sm:w-1/2">
        <label htmlFor={inputId} className="block text-sm text-gray-600 mb-1">
          {label}
        </label>
        <input
          id={inputId}
          type="number"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-blue-500"
          placeholder="Enter amount"
          disabled={disableAmount}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(e.target.value === "" ? "" : Number(e.target.value))
          }
        />
      </div>

      <div className="w-full sm:w-1/2">
        <label className="block text-sm text-gray-600 mb-1">Currency</label>
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-gray-50 cursor-pointer outline-blue-500"
          disabled={disableCurrency}
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
