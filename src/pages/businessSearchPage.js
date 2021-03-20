import React, { useContext, useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";
import MainHeader from "../components/mainHeader";
import Footer from "../components/footer"
import BusinessResults from "../components/businessResults"
import { searchContext } from "../searchContext";



function BusinessSearchPage(){

    const {term,location} = useParams();

    const {fetchYelpData} = useContext(searchContext);

   useEffect(()=>{
        fetchYelpData(term,location)
   },[])

   useEffect(()=>{
    fetchYelpData(term,location)
   },[term,location])


    return(
        <div>
            <MainHeader />
            <BusinessResults />
           
            <Footer/>
        </div>
    )
}

export default BusinessSearchPage