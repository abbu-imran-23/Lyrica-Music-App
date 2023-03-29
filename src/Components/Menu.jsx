import React from 'react'

const Menu = ({Title, MenuObject}) => {

  return (
    <div>

        {/* Title */}
        <h4 className='uppercase text-center font-semibold font-sans opacity-90 text-white text-xl'>{Title}</h4>

        {/* Menu Items */}
        <ul className='w-full my-[0.335rem]'>
            {
                MenuObject && MenuObject.map((menuItem) => {
                    return (
                        <li className='list-none w-full relative'>
                            <a href={menuItem.name} className="text-white opacity-70 hover:opacity-90 pl-3 py-1 text-[1.15rem] flex items-center gap-x-3 rounded-md hover:bg-[#302e2e]">
                                <i className='pb-[0.2rem]'>{menuItem.icon}</i>
                                <span className='pb-[0.2rem]'>{menuItem.name}</span>
                            </a>
                            <div className='h-8 w-1 mt-1 rounded-md bg-[#169b52] text-[#169b52] absolute top-0 bottom-0 -left-3'>

                            </div>
                        </li>
                    )
                })
            }
        </ul>

    </div>
  )
}

export default Menu