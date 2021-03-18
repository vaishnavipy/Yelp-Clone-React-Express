import React from "react"
import {IoFastFoodOutline} from "react-icons/io5"

function Header(){
    return(
    <div className="header">
        <div className="logo"><IoFastFoodOutline />Lone Star Dining</div>
        <div>
            <a href="#">Restuarants</a>
            <a href="#">My Orders</a>
            <button className="hover">Log Out</button>
        </div>
    </div>)
}

export default Header