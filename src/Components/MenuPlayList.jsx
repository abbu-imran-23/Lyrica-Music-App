import React from 'react'
import { FaPlus } from "react-icons/fa";
import { PlayList } from './../Data/PlayList'
import { BsMusicNoteList, BsTrash } from "react-icons/bs";

const MenuPlayList = ({Title}) => {
  return (
    <div className='w-full mt-3'>

        {/* Title */}
        <div className='flex justify-between my-2 w-full px-2 items-center relative'>
            <h4 className='text-center tracking-wider font-semibold font-sans opacity-90 text-white text-xl'>{Title}</h4>
            <i className='pt-1'><FaPlus/></i>
        </div>

        <div className='w-full gap-x-1 mt-2 overflow-x-hidden'>
            {
                PlayList && 
                PlayList.map((listItem) => {
                    return (
                        <div key={listItem.id} className="flex text-white opacity-70 hover:opacity-100 hover:bg-[#302e2e] rounded-md w-full mx-auto text-[1.075rem] py-1 px-2 gap-y-4 items-center justify-between">
                            <div className='flex gap-3 items-center'>
                                <i><BsMusicNoteList/></i>
                                <h5>{listItem.name}</h5>
                            </div>
                            <i><BsTrash/></i>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default MenuPlayList