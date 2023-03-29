import React from 'react'
import Logo from './../assets/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import Menu from './Menu'
import MenuList from './../Data/MenuList'
import MenuPlayList from './MenuPlayList'
import TrackList from './TrackList'

const LeftMenu = () => {
  return (
    <div className='text-white bg-black opacity-85 w-[280px] h-[100%] min-h-[100vh] px-[25px] py-[20px] overflow-hidden '>

        {/* Logo */}
        <div className='flex justify-center gap-x-4 items-center'>
            <img src={Logo} alt="" className='w-[45px] h-[45px]' />
            <h2 className='text-3xl opacity-90 mb-[0.4rem] tracking-wider font-bold font-sans'>Lyrica</h2>
        </div>

        {/* Search Bar */}
        <div className='flex w-full mt-5 mb-4 h-[40px] bg-searchBarColor overflow-hidden rounded-md'>
            <input type="text" placeholder='Search...' className='outline-none p-2 border-0 w-[190px] bg-searchBarInputColor font-normal text-[17px] pt-1 tracking-wider text-white opacity-80 '/>
            <i><BiSearchAlt className='h-[40px] w-[40px] pl-1 py-1 bg-[#3e3c3c]'/></i>
        </div>

        {/* Menu */}
        <Menu Title={"Menu"} MenuObject={MenuList}/>

        {/* Playlist */}
        <MenuPlayList Title={"PlayList"}/>

        {/* Tracklist */}
        <TrackList TrackName={"Take On Me"} ArtistName={"A-ha"}/>

    </div>
  )
}

export default LeftMenu