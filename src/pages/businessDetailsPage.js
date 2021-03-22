import React, { useContext, useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";
import MainHeader from "../components/mainHeader";
import Footer from "../components/footer"
import axios from "axios";
import RestuarantBanner from "../components/restuarantBanner"
import RestuarantDetails from "../components/restuarantDetails"




function BusinessDetailsPage(){

  const {name,id} = useParams();

  const [restuarantInfo,setRestuarantInfo] = useState({});

  const [restuarantReviews,setRestuaranReviews] = useState([])

  useEffect(()=>{

    axios.post("/yelp/business/alias",{alias:name})
    .then(response => {
        setRestuarantInfo(response.data);
        
    })

    axios.post("/yelp/business/reviews",{alias:name})
    .then(response => {
        setRestuaranReviews(response.data.reviews)
        console.log(response.data.reviews)
    })


  },[])


    return(
        <div>
            <MainHeader />
            <RestuarantBanner info={restuarantInfo} />
            <RestuarantDetails info={restuarantInfo} restuarantReviews={restuarantReviews}/>
            <Footer />
           
        </div>
    )
}

export default BusinessDetailsPage