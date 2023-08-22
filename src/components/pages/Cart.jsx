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
    <div>
      <div>
        {cart.length === 0 ? (
          <div>Empty</div>
        ) : (
          <div>
            <div>
              {cart.map((cart) => (
                <Cartlist key={cart.id} item={cart}></Cartlist>
              ))}
            </div>
            <div>
              <div>
                <h1>Your Cart</h1>
                <h1>Summery</h1>
                <p>{cart.length}</p>
              </div>
              <div>
                <div>Total Amount : {totalAmount}</div>
                <button>Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
