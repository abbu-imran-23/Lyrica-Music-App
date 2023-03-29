import React from 'react'
import { FaUsers } from "react-icons/fa";

const MenuOptions = () => {
  return (
    <div className='flex justify-between items-center text-[1.125rem] tracking-wide px-5 py-2 font-sans font-semibold text-white bg-gray-700'>
        <ul className='flex items-center gap-6'> 
            <li><a href="connect" className='opacity-60 hover:opacity-100'>Popular</a></li>
            <li><a href="connect" className='opacity-60 hover:opacity-100'>Albums</a></li>
            <li><a href="connect" className='opacity-60 hover:opacity-100'>Songs</a></li>
            <li><a href="connect" className='opacity-60 hover:opacity-100'>Fans</a></li>
            <li><a href="connect" className='opacity-60 hover:opacity-100'>About</a></li>
        </ul>
        <p className='flex items-center gap-2'>
          <i className='opacity-60 hover:opacity-100'><FaUsers /></i>
          <span className='opacity-60 hover:opacity-100'>12.3M</span>
          <span className='opacity-60 hover:opacity-100'>Followers</span>
        </p>
    </div>
  )
}

export default MenuOptions