import React from 'react'
import Banner from './Banner'
import MenuOptions from './MenuOptions'

// w-[calc(100%_-_23.75rem)] - first div

const MainContainer = () => {
  return (
    <div className='text-black text-center bg-slate-400 flex-grow '>
      
      {/* Banner */}
      <Banner/>

      {/* Menu List */}
      <MenuOptions/>

    </div>
  )
}

export default MainContainer