import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex1 from './Ex1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ex1 />
    </>
  )
}

export default App
