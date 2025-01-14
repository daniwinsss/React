import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { themeProvider } from './context/theme'
import { useEffect } from 'react'

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");
  useEffect(() => {
    document.querySelector('html').classList.remove("dark","light");
    document.querySelector('html').classList.add(themeMode);
  },[themeMode]);
  return (
    <themeProvider value ={ {themeMode,darkTheme,lightTheme} }>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            
        </div>

        <div className="w-full max-w-sm mx-auto">
            
        </div>
      </div>
    </div>
    </themeProvider>
  )
}

export default App
