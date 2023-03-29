import React from 'react'
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
import ArtistImage from './../assets/artist.jpg'
import CheckImage from './../assets/check.png'

const Banner = () => {
  return (
    <div className='h-[300px] relative'>
      
      {/* Image */}
      <img src={ArtistImage} alt="" className='object-cover blur-[2px] grayscale w-full h-full' />

      {/* Banner Contents */}
      <div className='flex flex-col justify-between absolute top-4 bottom-4 left-7 right-7'>

        {/* Top Content */}
        <div className='flex justify-between text-xl font-sans font-semibold items-center'>
          <p className='flex'>
            <span className='opacity-70 text-white'>Home&nbsp;</span>
            <span className='opacity-100 text-white'>/ Popular Artist</span>
          </p>
          <i className='text-4xl text-white'><FaEllipsisH/></i>
        </div>

        {/* Bottom Content */}
        <div className='flex justify-between'>

          {/* Bottom Left Content */}
          <div className='flex flex-col'>
            <div className='flex items-center'>
              <h4 className='text-3xl text-white font-sans font-semibold'>A-Ha</h4>
              <img src={CheckImage} alt="" className='w-[45px] h-[45px]' />
            </div>
            <p className='flex items-center gap-4'>
              <div className='flex text-white text-[1.15rem] font-sans font-semibold items-center gap-2'>
                <i><FaHeadphones/></i>
                <span>11,184,1211</span>
              </div>
              <span className='text-white text-[1.15rem] font-sans font-semibold opacity-70'>Monthly Listeners</span>
            </p>
          </div>

          {/* Bottom Right Content */}
          <div className='flex items-center gap-4'>
            <a href="play" className='px-4 pt-1 pb-2 tracking-wide rounded-lg text-xl bg-green-600 text-white font-bold'>Play</a>
            <a href="icon" className='flex items-center gap-2 px-3 tracking-wider font-semibold pt-1 pb-2 text-white bg-gray-900 rounded-lg'>
              <i className='text-[1rem] pt-1'>
                <FaCheck/>
              </i>
              <span className='text-xl'>Following</span>
            </a>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Banner