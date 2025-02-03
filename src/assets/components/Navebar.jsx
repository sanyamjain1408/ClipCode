import React from 'react'
import { NavLink } from 'react-router-dom'

const Navebar = () => {
  return (
    <div className='flex flex-row justify-evenly items-center  gap-4 place-content-evenly bg-white h-[100px] w-[100vw]'>
      <NavLink
      to = "/"
      >
        Home 
      </NavLink>

      <NavLink
      to = "/pastes"
      >
        Pastes 
      </NavLink>
    </div>
  )
}

export default Navebar
