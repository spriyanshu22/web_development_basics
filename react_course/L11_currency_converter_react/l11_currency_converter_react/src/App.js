import { useState } from 'react'
import './App.css'
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './customHooks/useCurrencyInfo.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("inr");
  const [toCurrency, setToCurrency] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const data = useCurrencyInfo(fromCurrency);
  const currencyInfo = data ? data.rates : {};
  var currencyOptions = Object.keys(currencyInfo);
  
  const convertCurrency = () => {
    // console.log("convertCurrency called")
    // console.log(currencyInfo)
    // console.log(amount,currencyInfo[toCurrency.toUpperCase()])
    setConvertedAmount(amount * (currencyInfo[toCurrency.toUpperCase()]));
  }

  const swapCurrencies = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  }

  return (
    <>
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
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
                              amount={amount}
                              onAmountChange = {setAmount}
                              onCurrencyChange= {setFromCurrency}
                              currencyOptions = {currencyOptions}
                              selectCurrency= {fromCurrency}
                              amountDisable = {false}
                              className=''
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swapCurrencies}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onAmountChange={setConvertedAmount}
                              onCurrencyChange={setToCurrency}
                              currencyOptions={currencyOptions}
                              selectCurrency={toCurrency}
                              amountDisable={true}
                              className=""
                          />
                      </div>
                      <button type="submit" className="w-full hover:bg-blue-400 bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default App
