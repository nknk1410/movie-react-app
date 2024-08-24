import React from 'react'

const Banner = () => {
  return (
    <div className='h-[20vh] md:h-[75vh] lg:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage : 'url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)'}}>

        <div className='text-center w-full text-black text-2xl bg-slate-100 bg-opacity-50 p-3'>Movie Name</div>
    </div>
  )
}


export default Banner