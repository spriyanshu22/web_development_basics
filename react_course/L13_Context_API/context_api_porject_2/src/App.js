import logo from './logo.svg';
import './App.css';
import Theme_button from './components/Theme_button';
import Card from './components/Card';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useState,useEffect } from 'react';

function App() {
  const [themeMode, setThemeMode] = useState('light'); // Initialize with a default value

  const toggleThemeMode = () => {
    if(themeMode === 'light') {
      setThemeMode('dark')
    }
    else {
      setThemeMode('light')
    }
  }

  // reflecting back the theme mode to the html element by injecting the class name dark or light accordingly
  useEffect(() => {
    
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
      <ThemeProvider value={{themeMode, toggleThemeMode}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <Theme_button/>
              </div>
      
              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
        </div>
      </ThemeProvider>
  );
}

export default App;
