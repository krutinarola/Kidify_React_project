import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSolidDockTop } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Wishlist() {
  return (
    <section>
      <div className='container md:container lg:container sm:container'>
        <h2 className='text-5xl font-semibold text-center mt-28 font-serif'>Wishlist</h2>
        <div className='text-center p-3 space-x-2'>

          <Link className='' to="/">
            <span className='text-purple-400'>Home</span>
          </Link>

          <MdOutlineKeyboardArrowRight className='inline' />
          <span>wishlist</span>
        </div>
        <div className='container-xl md:container-md mt-52'>
          <div className='h-12 bg-zinc-100 border-t-4 border-purple-400'>
            <BiSolidDockTop className='text-purple-400 text-xl ml-4 mt-2 inline' />
            <span className='p-2'>Your Wishlist is currently empty.</span>
          </div>

          <button className='bg-purple-500 mt-7 rounded-md h-12 w-72 text-white font-semibold'>Return to shop</button>
        </div>

      </div>



      

    </section>
  )
}

export default Wishlist