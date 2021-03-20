import React, { useContext } from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react/cjs/react.development";
import {searchContext} from "../searchContext"



function Filters(){

    const SUGGESTED = ["Curbside Pickup","Yelp Delivery","Open Now"];

    const FEATURES = ["Offering A Deal","Free WiFi"];

    const DISTANCE = ["Bird's Eye View","Driving(5 mi.)","Biking(2 mi.)","Walking(1mi.)","Within 4 Blocks"];

    const CATEGORY = ["Ramen","American","Mexican","Italian","Chinese"]

    const [priceFilter,setPriceFilter] = useState({"1":false,"2":false,"3":false,"4":false});

    const [categoryFilter,setCategoryFilter] = useState({Ramen:false,American:false,Mexican:false,Italian:false,Chinese:false})
        

    const {fetchYelpData} = useContext(searchContext);

    const {term,location} = useParams();

    const [filterParams,setFilterParams] = useState({price:"1,2,3,4" , category:"" })

    const suggested_filter=SUGGESTED.map((val,i) => {
        return(<CheckBox val={val} i={i}/>)
       
    })

    const features_filter= FEATURES.map((val,i) => {
        return(<CheckBox val={val} i={i}/>)
    })

    const distance_filter = DISTANCE.map((val,i) => {
        return(<CheckBox val={val} i={i}/>)
    })

    const category_filter = CATEGORY.map((val,i) => {
        return (<span key={i} id={val} onClick={handleCategoryFilter} className={categoryFilter[val] ? "selected" : ""}>{val}</span>)
    })

    function handlePriceFilter(e){
        const id = e.target.id;

        setPriceFilter(prevObj => ({...prevObj,[id]:!prevObj[id]} ) );

    }

    function handleCategoryFilter(e){
        const id = e.target.id;
        setCategoryFilter(prevObj => ({...prevObj,[id] : !prevObj[id]}) ) 
        
    }

    useEffect(()=>{
        let priceArr = ["1","2","3","4"];
        setFilterParams( prevState => ({...prevState,price : priceArr.filter((elm) => priceFilter[elm] ).join(",") } ))  ;
       
        fetchYelpData(term,location,filterParams.price);
    },[priceFilter])

    useEffect(()=>{
        setFilterParams(prevState => ({...prevState, category : CATEGORY.filter(val => categoryFilter[val]).join(",")}))

        fetchYelpData(term,location,filterParams.price, CATEGORY.filter(val => categoryFilter[val]).join(",") )
    },[categoryFilter])

    return(
    <div className="filters hide-scrollbar">
        <h4 className="filter-title">Filters</h4>
        <div className="price-filter" onClick={handlePriceFilter}>
            <p style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}} id="1" className= {priceFilter["1"] ? "selected" : ""} >$</p>
            <p className= {priceFilter["2"] ? "selected" : ""} id="2">$$</p>
            <p className= {priceFilter["3"] ? "selected" : ""} id="3">$$$</p>
            <p style={{border:"none",borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}} className= {priceFilter["4"] ? "selected" : ""} id="4">$$$$</p>
        </div>
        <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>

        <h4 className="filter-title">Suggested</h4>
        {suggested_filter}
        <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>

        <h4 className="filter-title">Category</h4>
        <div className="category-filter">
            {category_filter}
        </div>
        <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>

        <h4 className="filter-title">Features</h4>
        {features_filter}
        <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>

        <h4 className="filter-title">Distance</h4>
        {distance_filter}
        

    </div>)
}

function CheckBox({val,i}){
    return(
        <label className="checkmark-container" key={i}>
        <span className="label">{val}</span>
        <input type="checkbox" name="checkbox" />
        <span className="checkmark"></span>
    </label>
    )
}

export default Filters;