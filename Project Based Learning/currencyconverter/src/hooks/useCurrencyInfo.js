import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
    const [currencyData, setCurrencyData] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCurrencyData() {
            try {
                const res = await fetch(
                    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${baseCurrency}.json`
                );
                const data = await res.json();
                setCurrencyData(data[baseCurrency]);
            } catch (err) {
                console.error("Currency Fetch Error:", err);
                setError("Failed to load currency data.");
            }
        }

        fetchCurrencyData();
    }, [baseCurrency]);

    return { currencyData, error };
}

export default useCurrencyInfo;
