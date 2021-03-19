import React, { useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";
import MainHeader from "../components/mainHeader";
import BusinessResults from "../components/businessResults"
import Footer from "../components/footer"
import Pagination from "../components/pagination"
const axios = require("axios")


function BusinessSearchPage(){

   


    return(
        <div>
            <MainHeader />
            <BusinessResults />
           
            <Footer/>
        </div>
    )
}

export default BusinessSearchPage