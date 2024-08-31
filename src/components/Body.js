import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    //local state variable-super powerful variable
    const[listOfRestaurents,setlistOfRestaurents]=useState([]);
    const[searchText,setSearchText]=useState("");
    const[filteredRestaurant,setFilteredRestaurent]=useState([]);
    useEffect(()=>{
        fetchData();

    },[]);


    const fetchData=async()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json=await data.json();

        //Optional chaining
        console.log(json?.data.cards);
        setlistOfRestaurents(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurent(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    //Condtional Rendering 
   

    return  listOfRestaurents.length===0 ?<Shimmer/>:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=> {setSearchText(e.target.value)}}></input>
                    <button onClick={()=> {
                        const filteredRestaurant=listOfRestaurents.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurent(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurents.filter(
                    (res)=>res.info.avgRating>4
                );
                setlistOfRestaurents(filteredList);
                }}>Top Rated Restaurents</button>
                </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=>(
                 <RestaurentCard key={restaurant.info.id} resData={restaurant}/>   
                ))}
              
             
    
            </div>
        </div>
    );
    };

    export default Body