import React, { useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";
import SearchBar from "./searchBar";
import {IoFastFoodOutline} from "react-icons/io5"
import {IoMdArrowDropdown} from "react-icons/io"
import {BsFillChatDotsFill,BsBell} from "react-icons/bs"
import logo from "../images/logo.png"




function MainHeader(){

    const SUBHEADER_LINKS = [
        {
            linkName : "Restuarants",
            links : ["Delivery","Reservations","Burgers","Japanese","Chinese","Mexican","Italian","Thai"]
        },
        {
            linkName : "Home Services",
            links : ["Contractors","Landscaping","Electricians","Blacksmiths","Home Cleaners","Movers","HVAC","Plumbers"]
        },
        {
            linkName: "Auto Services",
            links : ["Auto Repair","Car Dealer","Oil Chnage","Body Shop","Parking","Car Wash","Towing","Parking"]
        },
        {
            linkName : "More",
            links : ["Dry Cleaning","Hair Salong","Home Repair","Gym","Bars","Massage","Night Life","Shopping"]
        }

    ]

    const subheader = SUBHEADER_LINKS.map((obj,i) => {
        return(
            <div className="dropdown" key={i}>
                <p className="subheader-links">
                    {obj.linkName} <IoMdArrowDropdown className="arrow"/>
                </p>
                <div className="dropdown-content">
                   {obj.links.map((link,i) => <a href="#" key={i}>{link}</a>)}
                </div>
            </div>

        )
    })

  
    
    return(
        <div >
            <div className="col-6-header">
                <div className="logo-mainHeader"><img src={logo}/></div>
                <SearchBar />
                <p className="links">For Businesses</p>
                <p className="links">Write a Review</p>
                <p>< BsFillChatDotsFill/></p>
                <p><BsBell/></p>
            </div>
            <div className="col-2-header">
                <div style={{width:"100%"}}></div>
                <div className="sub-header">
                   {subheader}
                   
                </div>

            </div>

            <hr style={{border:"1px solid #EEEEEF"}}/>

        </div>
    )
}

export default MainHeader;