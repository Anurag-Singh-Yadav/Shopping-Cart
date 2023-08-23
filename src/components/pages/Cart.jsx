import React, { useEffect, useState } from "react";
import Cartlist from "../Cartlist";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
      <div className="relative top-16">
        {cart.length === 0 ? (
          <div className="flex justify-center flex-col items-center h-[85vh]">
            <div className="text-2xl font-bold m-5">Your cart is empty!</div>
            <button className="text-xl bg-green-700 py-3 px-10 rounded-md font-bold font-serif hover:bg-green-500">
              <NavLink to='/'>
                Shop Now
              </NavLink>
            </button>
          </div>
        ) : (
          <div className="flex w-11/12 gap-6 mx-auto">
            <div className="w-[100%] md:w-[60%]">
              {cart.map((cart) => (
                <Cartlist key={cart.id} item={cart}></Cartlist>
              ))}
            </div>
            <div className="w-[100%] fixed right-1 md:w-[40%] flex flex-col justify-between min-h-[28rem] mt-8">
              <div>
                <h1 className="text-2xl font-bold text-green-500">Your Cart</h1>
                <h1 className="text-4xl font-bold text-green-700">Summary</h1>
                <p className="text-xl font-bold my-5">Total Item: {cart.length}</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-6">Total Amount :  ${totalAmount}</div>
                <button className="w-[100%] flex justify-center items-center bg-green-700 p-2 text-xl font-bold hover:bg-green-500">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
