import React, { useContext, useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";


function RestuarantBanner({info}){

    return(
        <div className="restuarant-banner">
         {info && info.photos ? <img src={info.photos[0]} />  : ""}  
         {info && info.photos ? <img src={info.photos[1]} />  : ""}  
         {info && info.photos ? <img src={info.photos[2]} />  : ""}  
         
        </div>
    )
}

export default RestuarantBanner