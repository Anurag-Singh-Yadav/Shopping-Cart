import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "./redux/slices/CartSlices";

export default function Product({ post }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeToCart() {
    dispatch(remove(post.id));
    toast.warning("Item removed successfully");
  }

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added successfully");
  }

  const isItemInCart = cart.some((item) => item.id === post.id);
  
  let len = (post.description.length)/3
  const titleshort = post.title.substr(0,15);
  const disc = post.description.substr(0,len);
  return (
    <div className="p-6 flex flex-col justify-between items-center rounded-md border  transition ease-linear gap-4 mb-7 hover:scale-110 hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
      <div className="text-xl font-semibold text-gray-700">{titleshort}...</div>
      <div className="text-xs opacity-60 text-clip overflow-hidden leading-4 font-normal">{disc}...</div>
     
      <div>
        <img src={post.image} width="100" alt=""></img>  
      </div>
      <div className="flex w-full justify-between items-center">
        <p className="font-bold text-green-600 ">${post.price}</p>
        {isItemInCart ? (
          <button onClick={removeToCart} className="bg-white text-gray-500 border-2 border-gray-500 px-3 py-2 uppercase rounded-full text-sm">Remove Item</button>
        ) : (
          <button className="bg-gray-500 text-white px-3 py-2 uppercase rounded-full text-sm" onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}
