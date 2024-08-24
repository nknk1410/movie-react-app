import React from 'react'

const Pagination = ({pageNo, handlePrev, handleNext}) => {
  return (
    <div className='w-full bg-gray-600 p-4 mt-8 flex justify-center'>
               <div onClick={handlePrev} className='px-6 mx-2 '><i className="fa-solid fa-arrow-left"></i></div>
               <div className='font-bold'>{pageNo}</div>
               <div onClick={handleNext} className='px-6 mx-2'><i className="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination