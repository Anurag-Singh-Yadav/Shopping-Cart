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
  return (
    <div>
      <div><img src={item.image} alt=''></img></div>
      <div>
        <div>{item.title}</div>
        <div>{item.discription}</div>
        <div>
            <div>{item.price}</div>
            <button onClick={removeToCart}><AiTwotoneDelete></AiTwotoneDelete></button>
        </div>
      </div>
    </div>
  )
}
