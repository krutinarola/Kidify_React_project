import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BiSolidDockTop } from "react-icons/bi";
import { Link } from 'react-router-dom';


function Pcart() {
  return (
    <section>
      <div className='container md:container lg:container sm:container'>
        <h2 className='text-5xl font-semibold text-center mt-28 font-serif'>Cart</h2>
        <div className='text-center p-3 space-x-2'>

          <Link className='' to="/">
            <span className='text-purple-400'>Home</span>
          </Link>

          <MdOutlineKeyboardArrowRight className='inline' />
          <span>Cart</span>
        </div>
        <div className='container-xl md:container-md mt-52'>
          <div className='h-12 bg-zinc-100 border-t-4 border-purple-400'>
            <BiSolidDockTop className='text-purple-400 text-xl ml-4 mt-2 inline' />
            <span className='p-2'>Your cart is currently empty.</span>
          </div>

          <button className='bg-purple-500 mt-7 rounded-md h-12 w-72 text-white font-semibold'>Return to shop</button>
        </div>

      </div>



      {/* <div className='container'>

        <div className=" justify-center absolute  z-10 w-64 m-auto bg-slate-50 text-center rounded-lg right-0 left-0 bottom-2/4 ">
          <p className="md:font-bold text-uppercase text-purple-500   visible text-sm font-sans leading-9 ">Instagram feed</p>
        </div>
      </div>
      <div className=" flex items-center overflow-hidden  mt-32   ">
        <div className=" -mr-36 -ml-36 flex items-center  ">
          <div className=" animated visible w-48 h-48  pl-1.5 pr-1.5 transition duration-700  ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48  pl-1.5 pr-1.5 transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta2.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48  pl-1.5 pr-1.5 transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta3.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48  pl-1.5 pr-1.5 transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta4.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48 pl-1.5 pr-1.5 transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta5.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48  pl-1.5 pr-1.5 transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta6.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48  pl-1.5 pr-1.5 transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta7.png" alt="kidify" />
          </div>
          <div className=" animated visible w-48 h-48 pl-1.5 pr-1.5  transition duration-700 ease-out hover:scale-[1.05]">
            <img src="./src/assets/insta8.png" alt="kidify" />
          </div>
        </div>
      </div> */}


    </section>
  )
}

export default Pcart