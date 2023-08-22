import React from 'react'
import { NavLink } from 'react-router-dom'
import{ FaShoppingCart }from 'react-icons/fa'
export default function Navbar() {
  return (
    <div className='bg-[#252B48]'>
      <div className='flex justify-between w-11/12 mx-auto items-center p-1'>
        <NavLink to='/'>
        <div className='w-[190px] p-2 mx-3'>
          <img src='https://codehelp-shopping-cart.netlify.app/logo.png' alt='this'></img>
        </div>
        </NavLink>
        
        <div className='flex justify-center items-center gap-8 text-white'>
            <NavLink to='/'>
              <div>Home</div>
            </NavLink>
            <NavLink to='/cart'>
              <div>
                <FaShoppingCart></FaShoppingCart>
              </div>
            </NavLink>
        </div>

      </div>
    </div>
  )
}
