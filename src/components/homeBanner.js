import React from "react"
import Header from "./header"
import {BiSearch,BiRestaurant,BiCalendarCheck} from "react-icons/bi"

import {FaWrench,FaTruckMoving} from "react-icons/fa"


function HomeBanner(){
    return(

    <div className="home-banner-container">    

        <div className="home-banner ">
            <Header />

            <div className="banner-content container">
                <h1>ORGANIC FAST FOOD MADE EASY AND HEALTHY</h1>

                <div className="search">
                    <label>Find</label>
                    <input type="text" style={{borderRight:"1px solid gray"}} placeholder="restuarants.."/>
                    <label>Near</label>
                    <input type="text" placeholder="Cypress,Texas"/>
                    <span className="icons hover"><BiSearch/></span>
                </div>

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
                <span><span > 1000+ </span><em>Restuarants</em></span>
                <span><span > 200,000</span><em>People Served</em></span>
                <span><span>100,000 </span><em>Registered Users</em></span>
            </div>
        </div>

    </div>
    )
}

export default HomeBanner