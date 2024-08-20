import React from "react";
import { useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems)


  return (
    <div className="w-[80%] mx-auto my-2 text-center">

      <p className="font-semibold text-3xl my-2 underline"> Cart</p>
      {cartItems.length===0&&
       <div className="  font-bold text-4xl h-[80%] my-auto ">  Your cart is empty </div> 
      }
       {cartItems.map((itemCard, index) => {
        return (
          <div key={index} className="p-2 border-gray-300 border-2 flex">
            <div className="w-9/12">
              <div className="">
                <p className="font-semibold text-xl">
                  {itemCard.card.info.name}
                </p>
                <p className="my-2">
                  Rs.
                  {itemCard.card.info.price
                    ? itemCard.card.info.price / 100
                    : itemCard.card.info.defaultPrice / 100}
                </p>
                <p className=""> {itemCard.card.info.description} </p>
              </div>
            </div>
            <div className="relative w-3/12">

              <img
                src={CDN_URL + itemCard.card.info.imageId}
                className="border bottom-3 h-44 w-full rounded-lg"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
