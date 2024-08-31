import { CDN_URL } from "../utils/constants";
import  {useState} from 'react';
import { useDispatch } from "react-redux";
import { addItem} from "../utils/cartSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemList = ({ itemCards, title }) => {
  
  const length = itemCards?.length || null;
  const [showItems , setShowItems] = useState(false);
  
  
  const handleItemClick = () => {
    setShowItems(!showItems)
  }
  
  
  const dispatch =  useDispatch();
  const handleAddItem = (itemCard) => {
    
    dispatch(addItem(itemCard))
    
    toast('Item added successfully !!!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
      });

  }

  return (
    <>
     
     {length && 
     <div  onClick={handleItemClick} className="border border-b-slate-400  text-center flex justify-between overflow-auto m-2">
      <p className="md:px-3 py-2 text-center font-bold text-2xl "> {title} ({length}) items </p>
      <button className="hover px-8 py-3 text-2xl"> {showItems?"⬆️":"⬇️"} </button>

     </div>
     }

      {showItems &&   itemCards && itemCards.map((itemCard, index) => {
        return (

          <div key={index} className="w-full p-2 m-2 border-gray-300 border-b-2 flex">
            <div className="w-9/12">
              <div className="">
                <p className="font-semibold text-xl">{itemCard.card.info.name}</p>
                <p className="">
                  Rs.
                  {itemCard.card.info.price
                    ? itemCard.card.info.price / 100
                    : itemCard.card.info.defaultPrice / 100}
                </p>
                <p className=""> {itemCard.card.info.description} </p>
              </div>
            </div>
            <div className="relative w-3/12">
              <button onClick={() => handleAddItem(itemCard)} className="absolute left-24  bottom-1 bg-black text-white  py-1 px-3 rounded-md">
               Add + </button>
              <img
                src={CDN_URL + itemCard.card.info.imageId}
                className="border bottom-3 h-44 w-full rounded-lg"
              />

              <ToastContainer />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemList;
