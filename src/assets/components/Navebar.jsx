import React from 'react'
import { NavLink } from 'react-router-dom'

const Navebar = () => {
  return (
    <div className='flex flex-row justify-evenly items-center  gap-4 place-content-evenly p-0 m-0 rounded bg-white h-[100px] w-[100vw] '>
      <NavLink
      to = "/" 
      >
       <div
       id='kanu'
       className='text-black font-extrabold text-4xl '>
         Home

       </div>
      </NavLink>

      <NavLink
      to = "/pastes"
      >
       <div
       id='kanu'
       className='text-black font-extrabold text-4xl '>
       Pastes 
       </div>
      </NavLink>
    </div>
  )
}

export default Navebar
