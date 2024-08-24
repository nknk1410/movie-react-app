import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import Movie from './Components/Movie'
import WatchList from './Components/WatchList'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Banner from './Components/Banner'

function App() {
  const [count, setCount] = useState(0)
  const [watchlist, setWatchList] = useState([]);
  // Add to WatchList
  const handleAddtoWatchlist = (movieObj) => {
    // Check if movieObj is valid
    if (!movieObj || !movieObj.id) {
      console.error("Invalid movie object:", movieObj);
      return;
    }

    // Check if movie is already in the watchlist
    if (watchlist.some(movie => movie.id === movieObj.id)) {
      console.warn("Movie is already in the watchlist:", movieObj);
      return;
    }

    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem('movieApp', JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    console.log(newWatchList);
  };

  // Remove from WatchList
  const handleRemoveFromWatchList = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => movie.id !== movieObj.id);
    //localStorage.setItem('movieApp', JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
    localStorage.setItem('movieApp', JSON.stringify(filteredWatchList));
    console.log('filteredWatchList', filteredWatchList);
  };

  // Initialize watchlist from local storage
  useEffect(() => {
    let movieFromLocalStorage = localStorage.getItem('movieApp');
    if (movieFromLocalStorage) {
      try {
        let parsedWatchlist = JSON.parse(movieFromLocalStorage);
        if (Array.isArray(parsedWatchlist)) {
          setWatchList(parsedWatchlist);
        } else {
          console.error("Parsed watchlist is not an array:", parsedWatchlist);
          setWatchList([]);
        }
      } catch (error) {
        console.error("Failed to parse watchlist from local storage:", error);
        setWatchList([]);
      }
    }
  }, []);
// basename='/reactapp/movie
  return (
    <>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<><Banner /><Movie watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} /></> } />
        <Route path='/watchlist' element={ <WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
