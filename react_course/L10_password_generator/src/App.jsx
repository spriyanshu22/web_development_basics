import { useState, useRef, useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState('hi');
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(true);
  const [isSpecial, setIsSpecial] = useState(true);
  const passwordInput = useRef(null);

  const copyPasswordToClipboard = () => {
    //  for nextjs we will use navigator.clipboard.writeText as window.clipboard.writeText is not available
    passwordInput.current.select();
    window.navigator.clipboard.writeText(password || 'error');
    // alert('Password copied to clipboard');
  }

  const generatePassword = useCallback(
    () => {
      let alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      let numbers = '0123456789';
      let specialChars = '!@#$%^&*()_+';
  
      if(isNumber) alphabets += numbers;
      if(isSpecial) alphabets += specialChars;
  
      let temp = "";
  
      for(let i = 0; i<length; i++){
        temp += alphabets[Math.floor(Math.random() * alphabets.length)];
      }
  
      setPassword(temp);
    },
    [length, isNumber, isSpecial]
  )

  useEffect(generatePassword,[length, isNumber, isSpecial]);
   

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500'>
        <div className='mb-4 flex overflow-hidden shadow rounded-lg'>
          <input
          type='text'
          value={password}
          ref={passwordInput}
          placeholder='password' // placeholder is the text that appears in the input field when it is empty
          className='w-full px-2 py-1'
          >
          </input>
          <button
          onClick={copyPasswordToClipboard}
          className='bg-blue-500 text-white px-2 py-1'
          >
          Copy
          </button>

        </div>

        <div className='flex items-center'>
          <input type="range"
          min="6"
          max="20"
          value = {length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className='ml-1'>Length({length})</label>
          
          <input 
          defaultChecked = {isNumber}
          onChange={(e)=>{setIsNumber(e.target.checked)}}
          className='ml-3'
          type="checkbox"/>
          <label className='ml-1'>Numbers</label>

          <input 
          defaultChecked = {isSpecial}
          onChange={(e)=>{setIsSpecial(e.target.checked)}}
          className='ml-3'
          type="checkbox"/>
          <label className='ml-1'>Characters</label>

        </div>
      </div>
    </>
  )
}

export default App
