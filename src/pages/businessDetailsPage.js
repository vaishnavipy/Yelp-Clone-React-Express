import React, { useContext, useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";
import MainHeader from "../components/mainHeader";
import Footer from "../components/footer"
import axios from "axios";
import RestuarantBanner from "../components/restuarantBanner"



function BusinessDetailsPage(){

  const {name,id} = useParams();

  const [restuarantInfo,setRestuarantInfo] = useState({})

  useEffect(()=>{

    axios.post("/yelp/business/alias",{alias:name})
    .then(response => {
        setRestuarantInfo(response.data);
        console.log(response.data)
    })


  },[])


    return(
        <div>
            <MainHeader />
            <RestuarantBanner info={restuarantInfo}/>
           
           
           
        </div>
    )
}

export default BusinessDetailsPage