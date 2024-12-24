import './App.css';
import InputBox from './components/InputBox';
import { useState } from 'react';
import { useCurrencyInfo } from './customHooks/useCurrencyInfo';

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const data = useCurrencyInfo(fromCurrency);

  const currencyTypes = data && data.rates ? Object.keys(data.rates) : ['USD', 'INR'];

  // console.log('currencyTypes:', currencyTypes);
  
  const convertCurrency = () => {
    if(data && data.rates)
    setConvertedAmount(amount * data.rates[toCurrency]);
  }

  // useState(() => {
    // convertCurrency();
  // },[fromCurrency, toCurrency, amount]);

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gray-800"
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convertCurrency();
                      }}
                  >
                      {/* from section */}
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              setAmount={setAmount}
                              currency={fromCurrency}
                              setCurrency={setFromCurrency}       
                              isEditable={true}
                              currencyTypes={currencyTypes}
                              className=''
                          />
                      </div>

                      {/* swap button */}
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={() => {
                                  const temp = fromCurrency;
                                  setFromCurrency(toCurrency);
                                  setToCurrency(temp);
                              }}
                          >
                              swap
                          </button>
                      </div>
                      
                      {/* to section */}
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currency={toCurrency}
                              setCurrency={setToCurrency}
                              isEditable={false}
                              currencyTypes={currencyTypes}
                              className=''
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App;
