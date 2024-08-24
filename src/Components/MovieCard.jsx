import React from 'react'

const MovieCard = ({movieObj, poster_path , name , handleAddtoWatchlist,handleRemoveFromWatchList,watchlist}) => {

  function doesContain(movieObj) {
    // Check if watchlist is null or not an array
    if (!Array.isArray(watchlist)) {
      return false;
    }
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  

  return (<> 
    <div className='w-[150px] sm:w-full lg:w-[250px]  h-[40vh] sm:h-[30vh] md:h-[40vh] lg:h-[50vh]  bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer 
  flex flex-col justify-end items-center relative' 
    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`}}>
    {doesContain(movieObj)?
    (<div onClick={()=>(handleRemoveFromWatchList(movieObj))} className='1 absolute top-2 right-2 flex justify-center h-6 w-6 rounded-md bg-gray-900/100'>&#10060;</div>) :
    (<div onClick={()=>(handleAddtoWatchlist(movieObj))} className='2 absolute top-2 right-2 flex justify-center h-6 w-6 rounded-md bg-gray-900/100'>&#128525;</div>)}
    
    
    <div className='text-white w-full text-center bg-black bg-opacity-50 py-2 rounded-b-xl'>{name}</div>
    </div>
    </>
  )
}

export default MovieCard

// https://api.themoviedb.org/3/movie/popular?api_key=4b41a56b33fa4bfdc53f952d65e2999c&language=en-US&page=1