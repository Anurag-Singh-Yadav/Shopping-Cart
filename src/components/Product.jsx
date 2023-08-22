import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { add, remove } from "./redux/slices/CartSlices";

export default function Product({ post }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function removeToCart() {
    dispatch(remove(post.id));
    // toast.warning("Item removed successfully");
  }

  function addToCart() {
    dispatch(add(post));
    toast.success("Item added successfully");
  }

  const isItemInCart = cart.some((item) => item.id === post.id);
  const titleshort = post.title.substr(0,15);
  const disc =post.description.substr(0,83);
  return (
    <div className="flex flex-col justify-between items-center w-1/4">
      <div>{titleshort}...</div>
      <div>{disc}...</div>
      <div>
        <img src={post.image} width="100" alt=""></img>
      </div>
      <div className="flex">
        <div>${post.price}</div>
        {isItemInCart ? (
          <button onClick={removeToCart}>Remove Item</button>
        ) : (
          <button onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
}
