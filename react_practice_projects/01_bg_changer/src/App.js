import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('bg-red-500');
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

  return (
    <div className="flex flex-col h-screen">
      <div className={`flex-grow bg-blue-200 ${bgColor}`}>
      </div>
  
      <div 
      className="flex justify-center p-4 "
      >
        {colors.map((color, index) => {
          return  <button key={index} className={color + ' w-10 h-10 m-2 rounded-full'}
          onClick={
            ()=>{
              setBgColor(color)
              console.log('color:', color)
            }
            }>
          </button>
        })}
      </div>

    </div>
  );
}

export default App;
