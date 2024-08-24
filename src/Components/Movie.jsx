import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination'

const Movie = ({handleAddtoWatchlist,handleRemoveFromWatchList,watchlist}) => {

    const [movies, setMovies] =useState([])
    const [pageNo, setPageNo] = useState(1)

    useEffect(()=>{
       axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=4b41a56b33fa4bfdc53f952d65e2999c&language=en-US&page=${pageNo}`).then(function(res){
        console.log(res.data.results)
        setMovies(res.data.results)
       })

    },[pageNo])

    const handleNext = ()=> {
        setPageNo(pageNo+1) 
    }

    const handlePrev = () =>{
        if(pageNo===1){
            setPageNo(pageNo) 
        }else{
            setPageNo(pageNo-1) 
        }    
    }


  return (
    <div className='p-5'>
    <div className='text-center font-bold text-xl my-5'>Tranding Movie</div>
    <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6'>
        {movies.map((movieObj, index) => {
        return <MovieCard watchlist={watchlist} movieObj={movieObj} key={index} poster_path={movieObj.poster_path} name={movieObj.original_title} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchList={handleRemoveFromWatchList} />;
        })}
    </div>
    <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext} />

    </div>
  )
}

export default Movie