import React, { useContext, useState } from "react"
import getStars from "../utils/getStars"


function RestuarantBanner({info}){
    const rating_arr = new Array(5).fill(null);

    return(
        <div className="restuarant-banner overlay">

        <div className="banner-text ">
            <h1>{info.name}</h1>
            <p className="star-p">{rating_arr.map((elm,i) => <span className="stars"> {getStars(info.rating,i+1)}</span>)} {info.review_count} reviews</p>
          {info && info.categories ?   <p>{info.is_claimed ? <span className="green">Claimed</span> : <span className="not-green">Not Claimed</span>} . {info.price} . {info.categories.map(elm => elm.title).join(",")}</p> : ""}
            <p>{info.is_closed ? <span>Closed</span> : <span className="green">Open</span>}</p>

        </div>  
         {info && info.photos ? <img src={info.photos[0]} />  : ""}  
         {info && info.photos ? <img src={info.photos[1]} />  : ""}  
         {info && info.photos ? <img src={info.photos[2]} />  : ""}   
         
        </div>
    )
}

export default RestuarantBanner