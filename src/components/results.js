import React, { useContext } from "react";
import { useEffect,useState } from "react/cjs/react.development";
import {useParams} from "react-router-dom";
import getStars from "../utils/getStars"
import {TiTick} from "react-icons/ti"
import Pagination from "./pagination"
import { searchContext } from "../searchContext";
const axios = require("axios")


function Results(){

    const {term,location} = useParams();

    const [result,setResult] = useState([]);

    const {activePage} = useContext(searchContext);

    useEffect(()=>{
        
        localStorage.setItem("input",`{term:"${term}",location:"${location}"}`)

        
       
        axios.post("/yelp/business/search",{term:term,location:location})
        .then(response => {
            setResult(response.data)
            console.log(response.data)
        })

    },[])

    useEffect(()=>{
        var offset = (activePage-1) * 20;

        localStorage.setItem("activePage",activePage)

        if(result.length < activePage*20){
            axios.post("/yelp/business/search",{term:term,location:location,offset:offset})
            .then(response => setResult(prevState => [...prevState,...response.data] ))
        }

       
    },[activePage])

    const restuarants = result.map((rest,i) => {
        const rating_arr = new Array(5).fill(null);
        let start = ((activePage-1)*20) ; let end = activePage*20;
        if(i >= start && i < end ){
                return ( 
                <div className="restuarant-card" key={i}>
                    <div className="img-container">
                    <img src={rest.image_url}/>
                    </div>
                    <div className="restuarant-details">
                        <div className="other-details">
                            <h3>{i+1}.{rest.name}</h3>
                            <p className="star-p">{rating_arr.map((elm,i) => <span className="stars"> {getStars(rest.rating,i+1)}</span>)} {rest.review_count}</p>
                            <p className="categories">{rest.price} . {rest.categories.map((obj,i) => <span key={i}>{obj.alias}{i !== rest.categories.length-1 ? ",":""}</span>)}</p>
                            <p className="transactions">{rest.transactions.map((elm,i) => <span key={i}><TiTick style={{color:"green"}}/> {elm}</span>)}</p>
                            <Review id={rest.id}/>
                        </div>
                        <div className="restuarant-address">
                            <p>{rest.phone}</p> 
                        <p >{rest.location.address1}</p>
                        <p>{rest.location.city}</p>
                        
                        </div>
                        
                    </div>
                </div>
                ) 
        }
    })


    return(
    <div className="results hide-scrollbar">
        <h4 className="filter-title">All Results</h4>
        {restuarants}
        
        <Pagination />
    </div>)
}

function Review({id}){
    return(<div></div>)
}

export default Results;