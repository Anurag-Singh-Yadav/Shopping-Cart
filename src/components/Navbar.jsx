import React from 'react'
import { NavLink } from 'react-router-dom'
import{ FaShoppingCart }from 'react-icons/fa'
import { useSelector } from 'react-redux'
export default function Navbar() {
  const { cart } = useSelector((state)=>state);
  return (
    <div className='bg-[#252B48] z-20 fixed w-[100%]'>
      <div className='flex justify-between w-11/12 mx-auto items-center p-1'>
        <NavLink to='/'>
        <div className='w-[190px] p-2 mx-3'>
          <img src='/mylogo2.png' alt='this'></img>
        </div>
        </NavLink>
        
        <div className='flex justify-center items-center gap-8 text-white'>
            <NavLink to='/'>
              <div className='text-xl'>Home</div>
            </NavLink>
            <NavLink to='/cart'>
              <div className='relative'>
                <FaShoppingCart className='text-4xl py-2'></FaShoppingCart>
                {
                  cart.length > 0 ? (<div className='absolute -top-2 text-sm bg-green-600 rounded-full right-0 px-2'>{cart.length}</div>):(<div></div>)
                }
              </div>
            </NavLink>
        </div>

      </div>
    </div>
  )
}
