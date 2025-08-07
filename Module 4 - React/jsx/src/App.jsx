import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex2 from './Ex2'
import Boxes from './Boxes/Boxes'

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]



function App() {
  const showCompany = (name, revenue) => {
    return (
      <div id={name}>
        {name} makes {revenue} each year
      </div>
    )
   }

  return (
    <>
    {/* <div className="ex-space">
      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map(c => showCompany(c.name, c.revenue))}
      </div>
    </div>

    <Ex2 /> */}
    <Boxes />
    </>
  )
}


export default App
