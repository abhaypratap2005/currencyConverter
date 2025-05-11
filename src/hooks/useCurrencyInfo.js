import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
                console.log("Currency data fetched:",res[currency]);
            })
            .catch((err) => console.error("Currency fetch error:", err));
    }, [currency]);

    return data;
}
 

export default useCurrencyInfo;
