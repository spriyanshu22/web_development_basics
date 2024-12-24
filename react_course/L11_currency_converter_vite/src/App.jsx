import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './customHooks/useCurrencyInfo.js'
import { use } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);


  console.log("hie  skkds")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://open.er-api.com/v6/latest/${"usd"}`);
        // setData(response.data);
        console.log(response.data,"data","hiii")
      } catch (error) {
        console.log("error in fetching data", error)
      }
    }
    fetchData();
  }, []);
  

  // const currencyInfo = useCurrencyInfo(fromCurrency);
console("currencyInfo called and data is ")
  //var currencyOptions = ['usd', 'inr', 'eur', 'gbp', 'aud', 'cad', 'sgd', 'chf', 'myr', 'jpy', 'cny'];
  //Object.keys(currencyInfo);
  
  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency]);
  }

  return (
    <>
      {/* <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              //backgroundImage: `url('${https://www.freepik.com/premium-photo/khaki-soft-pastel-gradient-modern-background-with-thin-barely-noticeable-floral-ornament-background-pattern-ar-32-job-id-84c67ce5a8254b35a85d468b2e648922_190178898.htm#fromView=keyword&page=1&position=31&uuid=4461bfda-17b9-4790-84a7-b0031caca8d1&new_detail=true}')`,
              backgroundImage: `url('https://www.freepik.com/premium-photo/khaki-soft-pastel-gradient-modern-background-with-thin-barely-noticeable-floral-ornament-background-pattern-ar-32-job-id-84c67ce5a8254b35a85d468b2e648922_190178898.htm#fromView=keyword&page=1&position=31&uuid=4461bfda-17b9-4790-84a7-b0031caca8d1&new_detail=true')`,
          }} 
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convertCurrency();
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              value={amount}
                              onAmountChange = {setAmount}
                              onCurrencyChange= {setFromCurrency}
                              currencyOpitons = {Object.keys(currencyInfo)}
                              selectCurrency= {fromCurrency}
                              amountDisable = {false}
                              className=''
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div> */}
    </>
  )
}

export default App
