import { useState } from "react"
import Home from "./Home";
import Landing from "./Landing";


export default function Ex2() {
  const [user, setUser] = useState('Robyn');
  const [store, setStore] = useState([
    { item: "XSPS Pro Player", price: 800, discount: 0.2, hottest: false },
    { item: "Gizem Backwatch", price: 230, discount: 0.6, hottest: false },
    { item: "Surround Sound Pelican", price: 3099, discount: 0.05, hottest: true }
  ])
  const [shouldDiscount, setShouldDiscount] = useState(false);
  const [currentPage, setCurrentPage] = useState('Landing');

  function changePage() {
    if (currentPage === 'Landing') setCurrentPage('Home');
    else setCurrentPage('Landing');
  }

  return (
    <>
      <button onClick={changePage}>Switch From {currentPage}</button>
      <button onClick={() => setShouldDiscount(!shouldDiscount)}>{shouldDiscount ? 'Add' : 'Remove'} Discount</button>
      {currentPage === 'Home'
        ? <Home store={store} shouldDiscount={shouldDiscount}/>
        : <Landing name={user} store={store}/>
      }


    </>
  )
}