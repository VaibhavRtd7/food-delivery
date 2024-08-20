import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import ItemList from "./ItemList";

const RestroMenu = () => {
  const { id:resId } = useParams();
  const [resInfo, resInfoDetails] = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerMenu />;
  
  return (
    <div className="w-[75%] mx-auto mt-4 p-6 rounded-lg shadow-lg">
      {resInfo ? (
        <>
          <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 shadow-lg">
            <div className="md:w-1/3 md:m-7 ">
              <img
                src={`${CDN_URL}${resInfo.cloudinaryImageId}`}
                alt={resInfo.name}
                className="w-full h-60 object-cover rounded-lg"
              />
            </div>

            <div className="border rounded-lg py-4 m-10 md:w-2/3 md:pl-6">
              <h2 className="text-4xl font-semibold font-mono  ">
                {resInfo.name}
              </h2>
              <p className="text-sm mb-2 font-mono">
                {resInfo.veg ? "Vegetarian🟩" : "Non-Vegetarian🟥"}
              </p>
              <p className="text-3xl">{resInfo.costForTwoMessage}</p>
              <p>
                {resInfo.sla.minDeliveryTime} - {resInfo.sla.maxDeliveryTime}{" "}
                minutes
              </p>

              <p className="text-xl">{resInfo.areaName} , {resInfo.city}</p>

              <p className="text-lg font-bold ">
                {resInfo.avgRating}
                {" stars  "}
                {resInfo.totalRatingsString}
              </p>

            </div>
          </div>
          <hr className="my-10" />
          <div className="border shadow-xl">
            {resInfoDetails && 
              resInfoDetails.map((item, index) => {
                
                const itemCards = item.card.card.itemCards;
                const categories = item.card.card.categories;
                const title = item.card.card.title;

                return categories ? (
                  categories.map((category, index) => {
                    <ItemList
                      key={index}
                      title={title}
                      demo="categories demo"
                      itemCards={category.itemCards}
                    />;
                  })
                ) : (
                  <ItemList
                    key={index}
                    title={title}
                    demo="itemlist demo"
                    itemCards={itemCards}
                  />
                );
                
              })}
          </div>
        </>

      ) : (
        <ShimmerMenu />
      )}

    </div>
  );
};

export default RestroMenu;
