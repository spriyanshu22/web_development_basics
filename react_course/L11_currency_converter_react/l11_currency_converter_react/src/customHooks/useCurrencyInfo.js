import { useEffect, useState } from "react";

 function useCurrencyInfo(currency) {
    const [data, setData] = useState(null)
    
    useEffect(() => {
    
        // api : https://open.er-api.com/v6/latest/USD
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => response.json())
        .then((jsonResponse) => setData(jsonResponse))
        .catch((error) => console.log("error in fetching data", error))

        // console.log("fetching data")
    }
   , [currency]);
    
    // prinitng currecny in upper case
    // console.log("new currency selected ", currency.toUpperCase()) 
    // console.log("data is ", data)
    return data
}

export default useCurrencyInfo;