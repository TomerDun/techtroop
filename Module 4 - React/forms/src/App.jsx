import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex1 from './Ex1'
import Ex2 from './Ex2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Ex1 /> */}
      <Ex2 />
    </>
  )
}

export default App
