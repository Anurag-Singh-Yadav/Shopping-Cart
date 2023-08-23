import React from 'react'
import{ AiTwotoneDelete }from 'react-icons/ai'
import { remove } from "./redux/slices/CartSlices";
import { useDispatch } from 'react-redux';
export default function Cartlist({key,item}) {
    const dispatch = useDispatch();
    function removeToCart() {
        dispatch(remove(item.id));
        // toast.warning("Item removed successfully");
      }
      let disc =item.description.substr(0,83);
  return (
    <div className='flex cartlist items-center p-3 gap-2 justify-between border-b-2 border-slate-500 mt-2 mb-2 md:mx-5'>
      <div className='w-[35%]'><img src={item.image} className='m-2 object-cover' alt=''></img></div>
      <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
        <div className='text-2xl font-bold mb-3 pt-4'>{item.title}</div>
        <div className='font-normal'>{disc}...</div>
        <div className='flex justify-between items-center pt-8 bottom-7'>
            <div className='t text-green-500 font-bold text-xl'>${item.price}</div>
            <button onClick={removeToCart}><AiTwotoneDelete className='text-red-900 text-5xl bg-red-300 p-4 rounded-full'></AiTwotoneDelete></button>
        </div>
      </div>
    </div>
  )
}
