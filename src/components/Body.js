import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body=()=>{
    //local state variable-super powerful variable
    const[listOfRestaurents,setlistOfRestaurents]=useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                    const filteredList = listOfRestaurents.filter(
                    (res)=>res.data.avgRating>4
                );
                setlistOfRestaurents(filteredList);
                }}>Top Rated Restaurents</button>
                </div>
            <div className="res-container">
                {listOfRestaurents.map((restaurant)=>(
                 <RestaurentCard key={restaurant.data.id} resData={restaurant}/>   
                ))}
              
             
    
            </div>
        </div>
    );
    };

    export default Body