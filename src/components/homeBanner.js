import React from "react"
import Header from "./header"
import {BiSearch,BiRestaurant,BiCalendarCheck} from "react-icons/bi"

import {FaWrench,FaTruckMoving} from "react-icons/fa"
import SearchBar from "./searchBar"


function HomeBanner(){
    return(

    <div className="home-banner-container">    

        <div className="home-banner ">
            <Header />

            <div className="banner-content container">
                <h1>ORGANIC FAST FOOD MADE EASY AND HEALTHY</h1>

                <SearchBar />

                <div className="features">
                    <span><span><BiRestaurant /></span>Restuarants</span>
                    <span><span style={{color:"white"}}><FaTruckMoving /></span>Delivery</span>
                    <span><span><BiCalendarCheck /></span>Reservations</span>
                    <span><span><FaWrench /></span>Home Services</span>
                </div>
            </div>
        </div>

        <div className="increment-counter">
            <div className="counter-container container">
                <p> 1000+ <em>Restuarants</em></p>
                <p> 200,000 <em>People Served</em></p>
                <p>100,000 <em>Users</em></p>
            </div>
        </div>

    </div>
    )
}

export default HomeBanner