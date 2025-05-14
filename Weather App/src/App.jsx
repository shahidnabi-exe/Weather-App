import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApp from './Components/WeatherApp/WeatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <WeatherApp />
      </div>
    </>
  )
}

export default App
