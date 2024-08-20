/* eslint-disable react/display-name */
import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const RestroCard = (props) => {

  const {
    name,
    id,
    costForTwo, 
    avgRating, 
    cloudinaryImageId,
    locality,
    areaName,
    sla,
    // aggregatedDiscountInfoV3
  } = props.info;
    
  // console.log("Id from Restro Card", id);
  const deliveryTime=sla.slaString;

  const navigate = useNavigate();
  const handleCardClick = (id) => {
     navigate(`/restaurant/${id}`)
  }

  
  return (
    <div className="bg-gray-100 hover:bg-gray-200 group border cursor-pointer border-gray-300 rounded p-4 hover:shadow-lg" 
     onClick={ () => handleCardClick(id)}
    >
    <div className="w-full h-52 mb-2 rounded-lg overflow-hidden">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt={name}
        className="w-full h-52 object-cover rounded-lg group-hover:scale-110 transition-all"
      />
    </div>
    <h2 className="text-xl text-ellipsis overflow-hidden font-bold">{name}</h2>
    <p className="text-gray-500">{deliveryTime}</p>
    <div className="flex items-center justify-between mt-4">
      <p className="text-gray-700 font-bold text-lg">{costForTwo}</p>
      <p className="text-yellow-500">{avgRating} ⭐</p>
    </div>
    <div className="flex items-center  text-gray-500">
      <p className="text-ellipsis overflow-hidden">{locality}</p>
      <p className="mx-2 text-ellipsis overflow-hidden">{areaName}</p>
    </div>
  </div>
  );
};


export const withOffer =  (RestroCard) => {
  return (props) => {
    // console.log("PROPS", props.info.aggregatedDiscountInfoV3)
    var {header, subHeader, discountTag }=props.info.aggregatedDiscountInfoV3;

    if(!subHeader) subHeader = "";
    
    return (
      <div className="relative">
          
          {discountTag  &&
            <p className="absolute top-2 left-2 px-2 text-2xl font-mono z-10 text-white text-shadow  bg-black rounded-xl">{discountTag}</p> 
          }
          
           <p className="absolute top-48 left-10 text-2xl font-extrabold z-10 text-white text-shadow">{header+subHeader}</p>

        <RestroCard {...props} />
      </div>
    );
  };
};

export default RestroCard;
