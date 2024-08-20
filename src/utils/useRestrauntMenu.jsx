import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

 const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);
    const [resInfoDetails, setResInfoDetails] = useState(null);
    

    useEffect( () => {
        fetchData();
    }, [resId]);

    const fetchData = async () => {

        try {
            
            const data = await fetch(MENU_API+`${resId}`);
            const json = await data.json();
    
            setResInfo(json?.data?.cards[2]?.card?.card?.info)
            setResInfoDetails(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
            // setResInfoDetails(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards);
        } catch (error) {
            console.log("Error fetching menu data:", error);
        }
    }

    return [resInfo, resInfoDetails];
 }

 export default useRestaurantMenu;