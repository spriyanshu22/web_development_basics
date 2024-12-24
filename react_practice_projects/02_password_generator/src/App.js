import logo from './logo.svg';
import './App.css';
import { useState,useEffect, useRef } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);

  const inputText = useRef(null);

  useEffect(() =>{
    setPassword('');
    var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    if(includeNumbers) letters += numbers;
    if(includeSymbols) letters += symbols;
    
    var password = '';

    for(var i = 0;i<passwordLength;i++){
      const index = Math.floor(Math.random() * letters.length);
      password += letters[index];
    }

    setPassword(password);

  },[passwordLength, includeNumbers, includeSymbols]);


  return (
    <div className="App flex items-center justify-center min-h-screen bg-gradient-to-r from-green-700 via-teal-700 to-blue-700">
      <div className="password-generator-box bg-white p-8 rounded-lg shadow-2xl">
        
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Password Generator</h1>
        
        <div className="password-display-section flex items-center mb-6">
          <input type="text" ref={inputText} className="password-display flex-grow p-3 border border-gray-300 rounded mr-2" readOnly 
          value={password}
          />
          <button 
          onClick={() => {
            window.navigator.clipboard.writeText(password);
            inputText.current.select();
          }}
          className="copy-button bg-blue-600 hover:bg-blue-700 text-white p-3 rounded">Copy</button>
        </div>
        
        <div className="password-options-section">
          <div className="password-length mb-6">
            <label className="block mb-2 text-lg text-gray-800">Password Length: {passwordLength}</label>
            <input type="range" className="w-full" min="1" max="20" 
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
            />
          </div>
          <div className="password-options">
            <label className="block mb-4 text-gray-800">
              <input type="checkbox" className="mr-2"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
               /> Include Numbers
            </label>
            <label className="block text-gray-800">
              <input type="checkbox" className="mr-2"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              /> Include Special Characters
            </label>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
