import React,{useEffect} from "react";
import Filters from "./filters"
import Results from "./results"
import LeafletMap from "./leaflet"
import { useContext } from "react/cjs/react.development";
import { searchContext } from "../searchContext";
import {useParams} from "react-router-dom"


function BusinessResults(){

    const {term,location} = useParams();

    const {fetchYelpData} = useContext(searchContext);

    useEffect(()=>{
        fetchYelpData(term,location);
    },[])


    return(
    <div className="business-results">
       <Filters />
       <Results />
       <LeafletMap />

    </div>)
}

export default BusinessResults;