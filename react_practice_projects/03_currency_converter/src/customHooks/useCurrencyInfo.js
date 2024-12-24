import { useState } from "react";
import { useEffect } from "react";

const useCurrencyInfo = (fromCurrency) => {
    const [currencyInfo, setCurrencyInfo] = useState({});

    useEffect(() => {
        fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            setCurrencyInfo(data);
        })
    },[fromCurrency]);

    console.log('currencyInfo:', currencyInfo);

    return currencyInfo;
}

export { useCurrencyInfo };