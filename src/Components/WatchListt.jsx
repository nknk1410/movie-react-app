import React, { useState } from 'react'

const WatchListt = ({watchlist}) => {

 const [search, setSearch] = useState('')

let handleSearch= (e)=> {
  setSearch(e.target.value)
}

  return (
    <>

    <div className='flex flex justify-center my-4 text-center'>
         <div className='p-2 mx-4 font-medium text-white rounded-lg  bg-sky-500/60 w-[8rem]'>All Geners</div>
         <div className='p-2 mx-4 font-medium  text-white rounded-lg bg-sky-500/60 w-[8rem]'>Action</div>
         <div className='p-2 mx-4 font-medium  text-white rounded-lg bg-sky-500/60 w-[8rem]'>Crime</div>

    </div>

    <div className='flex justify-center my-4'>
     <input onChange={handleSearch} type='text' placeholder='Search Movie' className='h-[3rem] w-[18rem] bg-gray-200 px-3 outline-none rounded-md' />
    </div>
    <div className='overflow-x-auto rounded-lg border border-gray-200 m-4'>
        <table className='fff min-w-[600px] text-gray-500 text-center'>
              <thead className='border-b'>
              <tr>
              <th className='px-2 py-1'>Name</th>
              <th className='px-2 py-1'>Rating</th>
              <th className='px-2 py-1'>Popularity</th>
              <th className='px-2 py-1'>Genre</th>
              <th className='px-2 py-1'>Action</th>
            </tr>
              </thead>
              <tbody>

  {watchlist.filter((movieObj)=>{
      return movieObj.title.toLowerCase().includes(search.toLocaleLowerCase())
  }).map((movieObj, index) => (
  <tr key={index} className='border-b-2'>
    <td className='flex items-center px-6 py-3'>
      <img className='h-[6rem] object-cover' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} alt={movieObj.title} />
      <div className='mx-4'>{movieObj.title}</div>
    </td>
    <td>{movieObj.vote_average}</td>
    <td>{movieObj.popularity}</td>
    <td>-</td>
    <td className='text-red-500 cursor-pointer' onClick={() => handleRemoveFromWatchList(movieObj)}>Delete</td>
  </tr>
))}



              </tbody>
        </table>

    </div>
    </>
  )
}

export default WatchListt