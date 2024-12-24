import { useEffect, useState } from "react";
import axios from "axios";

 function useCurrencyInfo(currency) {
    const [data, setData] = useState(null)
    
    useEffect(() => {


        const fetchData = async () => {
            try {
                const response = await axios.get(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`);
                setData(response.data);
                console.log(response.data,"data")
            } catch (error) {
                console.log("error in fetching data", error)
            }
        }
        

        fetchData();


        // const response = await axios.get(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`);

    
        // api : https://open.er-api.com/v6/latest/USD
        // fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
        // .then((response) => response.json())
        // .then((jsonResponse) => setData(jsonResponse))
        // .catch((error) => console.log("error in fetching data", error))

        
    }
    , []);
    
    // prinitng currecny in upper case
    console.log("new currency selected ", currency.toUpperCase()) 
    console.log("data is ", data)
    return data
}

export default useCurrencyInfo;