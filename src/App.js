import {useEffect, useState} from 'react'
import ProductCard from './components/ProductCard/ProductCard'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import './App.css'

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="app">
      <ThemeToggle setTheme={setTheme} currentTheme={theme} />
      <ProductCard />
    </div>
  )
}

export default App
