import { useMemo } from "react";

function ExpensiveComponent({ numbers = [] }) {
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((a, b) => a + b, 0);
  }, [numbers]);

  return <h3>Sum: {sum}</h3>;
}

export default ExpensiveComponent;
