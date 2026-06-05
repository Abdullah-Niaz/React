import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";

import { toggleTheme } from "./features/theme/themeSlice";

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className={`container ${theme}`}>
      <div className="counter-card">
        <h2 className="title">Redux Counter</h2>

        <div className="counter-display">
          <button className="icon-btn" onClick={handleDecrement}>
            −
          </button>

          <h1 className="count-value">{count}</h1>

          <button className="icon-btn" onClick={handleIncrement}>
            +
          </button>
        </div>

        <button className="reset-btn" onClick={handleReset}>
          Reset Counter
        </button>

        <div className="amount-section">
          <input
            type="number"
            placeholder="Enter Amount"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />

          <button className="amount-btn" onClick={handleIncrementByAmount}>
            Increment by Amount
          </button>
          <button onClick={() => dispatch(toggleTheme())}>
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
