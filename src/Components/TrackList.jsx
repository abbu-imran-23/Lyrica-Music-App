import React from 'react'
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import TrackImage from './../assets/track.png'

const TrackList = ({ TrackName, ArtistName }) => {
  return (
    <div className='mt-6 w-[280px] h-[160px] flex flex-col py-2 pl-[20px] rounded-md justify-center gap-6 absolute left-0 bg-slate-800 mx-auto p-1'>
        
        <div className="flex items-center gap-4">
            <img src={TrackImage} alt="" className='w-16 h-15' />
            <div className='flex flex-col'>
                <h4 className='text-white font-sans text-xl font-semibold opacity-90'>{TrackName}</h4>
                <h6 className='text-white font-sans text-[1.125rem] opacity-70'>{ArtistName}</h6>
            </div>
      </div>

      <div className="flex gap-3 text-white">
        <i className='text-2xl opacity-70 hover:opacity-100'>
          <BsFillVolumeUpFill />
        </i>

        <input type="range" className='appearance-none w-[130px] h-1 mt-[0.6rem] bg-green-400 rounded outline-none slider-thumb' />

        <i className='text-2xl opacity-70 hover:opacity-100'>
          <BsMusicNoteList />
        </i>

        <i className='text-2xl opacity-70 hover:opacity-100'>
          <FaDesktop />
        </i>
      </div>

    </div>
  )
}

export default TrackList