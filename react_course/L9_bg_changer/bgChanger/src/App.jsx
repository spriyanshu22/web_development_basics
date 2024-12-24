import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('red')

  return (
    <>
      <div className='fixed placeholder:main p-0 m-0 box-border w-full h-full justify-center items-end flex' style={{backgroundColor: bgColor}}>
        <div className='flex h-10 bg-yellow-100 flex justify-center items-center rounded'>
          {/****************** note that in onClick we are not passing setBgColor only as we have to send color as argument also, and now we can't dierectly send setBgColor('colorName') and then onClick will get the return value of the function, but it actually takes a callBack function as a input ********************/}
          <button className='bg-blue-500 hover:bg-blue-700 h-4/5 w-[4vw] text-white font-bold rounded-full m-8' onClick={() => setBgColor('blue')}/>
          <button className='bg-red-500 hover:bg-red-700 h-4/5 w-[4vw] text-white font-bold rounded-full m-8' onClick={() => setBgColor('red')}/>
          <button className='bg-green-500 hover:bg-green-700 h-4/5 w-[4vw] text-white font-bold rounded-full m-8' onClick={() => setBgColor('green')}/>
          <button className='bg-yellow-500 hover:bg-yellow-700 h-4/5 w-[4vw] text-white font-bold rounded-full m-8' onClick={() => setBgColor('yellow')}/>
          <button className='bg-purple-500 hover:bg-purple-700 h-4/5 w-[4vw] text-white font-bold rounded-full m-8' onClick={() => setBgColor('purple')}/>
        </div>
      </div>
    </>
  )
} 

export default App
