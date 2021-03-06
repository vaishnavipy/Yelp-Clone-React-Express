import React, { useContext } from "react";
import { useEffect,useState } from "react/cjs/react.development";
import {useHistory, useParams} from "react-router-dom";
import getStars from "../utils/getStars"
import {TiTick} from "react-icons/ti"
import Pagination from "./pagination"
import { searchContext } from "../searchContext";



function Results(){

    const {activePage,result,showBusinessDetails} = useContext(searchContext);

   
    /*  let start = ((activePage-1)*20) ; let end = activePage*20; */

    const restuarants = result.map((rest,i) => {
        const rating_arr = new Array(5).fill(null);
      
      /*  if(i >= start && i < end ){ */

                return ( 
                <div className="restuarant-card" key={i} onClick={() => {showBusinessDetails(rest.alias,rest.id)}}>
                    <div className="img-container">
                    <img src={rest.image_url}/>
                    </div>
                    <div className="restuarant-details">
                        <div className="other-details">
                            <h3>{(i+1) + ((activePage-1)*20)}.{rest.name}</h3>
                            <p className="star-p">{rating_arr.map((elm,i) => <span className="stars"> {getStars(rest.rating,i+1)}</span>)} {rest.review_count}</p>
                            <p className="categories">{rest.price} . {rest.categories.map((obj,i) => <span key={i}>{obj.alias}{i !== rest.categories.length-1 ? ",":""}</span>)}</p>
                            <p className="transactions">{rest.transactions.map((elm,i) => <span key={i}><TiTick style={{color:"green"}}/> {elm}</span>)}</p>
                            <Review id={rest.id}/>
                        </div>
                        <div className="restuarant-address">
                            <p>{rest.phone}</p> 
                        <p >{rest.location.address1}</p>
                        <p>{rest.location.city}</p>
                        
                        </div>
                        
                    </div>
                </div>
                ) 
        
    })


    return(
    <div className="results hide-scrollbar">
        <h4 className="filter-title">All Results</h4>
        {restuarants}
        
        <Pagination />
    </div>)
}

function Review({id}){
    return(<div></div>)
}

export default Results;