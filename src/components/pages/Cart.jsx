import React, { useEffect, useState } from "react";
import Cartlist from "../Cartlist";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  return (
      <div className="">
        {cart.length === 0 ? (
          <div>Empty</div>
        ) : (
          <div className="flex w-11/12 gap-6 mx-auto">
            <div className="w-[100%] md:w-[60%]">
              {cart.map((cart) => (
                <Cartlist key={cart.id} item={cart}></Cartlist>
              ))}
            </div>
            <div className="w-[100%] md:w-[40%] flex flex-col justify-between max-h-[25rem] mt-8">
              <div>
                <h1 className="text-2xl font-bold text-green-500">Your Cart</h1>
                <h1 className="text-4xl font-bold text-green-700">Summary</h1>
                <p className="text-xl font-bold my-5">Total Item {cart.length}</p>
              </div>
              <div>
                <div>Total Amount : {totalAmount}</div>
                <button>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
  );
}
