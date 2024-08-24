import React from 'react'
import Camera from '../camera.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex border space-x-8 item-center pl-3 py-3'>
    <img className='w-[30px]' src={Camera} alt="" />
    <Link to="/" className='text-blue-600 text-lg'>Movie</Link>
    <Link to="/watchlist" className='text-blue-600 text-lg'>Watchlist</Link>
    </div>
    </>
  )
}

export default Navbar