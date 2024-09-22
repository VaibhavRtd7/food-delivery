import { useState, useEffect } from "react";
import Card, { withOffer } from "./RestroCard";
import RestroCard from "./RestroCard";
import Shimmer from "./ShimmerContainer";
// import { Link } from "react-router-dom";
import { HOTELS_API } from "../utils/constants";
// import { CDN_URL } from "../utils/constants";

const Container = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchData, setSearchData] = useState("");

  const RestroCardOffer = withOffer(RestroCard);

  // For Top rated restraurants
  const handleClick = () => {
    const filterList = listOfRestaurants.filter(
      (item) => item.info.avgRating > 4.2
    );
    setFilterRestaurants(filterList);
  };

  // handling search data
  const handleSearch = () => {
    const filterRestaurants = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchData.toLowerCase())
    );
    setFilterRestaurants(filterRestaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(HOTELS_API);
      const json = await res.json();

      const restaurants =
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;

      setListOfRestaurants(restaurants);
      setFilterRestaurants(restaurants);
      // console.log("filterRestaurants : ",filterRestaurants );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      {/*  Search Bar And Top Rated Restaurants */}
      <div className="p-4 flex flex-col">
        <div>
          <input
            className="border-2 border-slate-400 rounded-md mx-0.5  p-1"
            type="text"
            placeholder="Search any food"
            onChange={(e) => setSearchData(e.target.value)}
            value={searchData}
          />
          <button
            className="border-2 border-slate-400 rounded-md p-1"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="bg-violet-200 font-serif bg border-2 border-pink-400 rounded-md mt-3 p-1 w-48 "
          onClick={handleClick}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filterRestaurants.map((item) => {
          return (
            <div key={item.info.id}>
              {item.info.aggregatedDiscountInfoV3 ? (
                <RestroCardOffer info={item.info} />
              ) : (
                <Card info={item.info} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Container;
