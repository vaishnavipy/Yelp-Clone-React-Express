import React from "react";



function Filters(){

    const SUGGESTED = ["Curbside Pickup","Yelp Delivery","Open Now"];

    const FEATURES = ["Offering A Deal","Free WiFi"];

    const DISTANCE = ["Bird's Eye View","Driving(5 mi.)","Biking(2 mi.)","Walking(1mi.)","Within 4 Blocks"];

    const CATEGORY = ["Ramen","American","Mexican","Italian","Chinese"]

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
        return (<span key={i}>{val}</span>)
    })

   


    return(
    <div className="filters hide-scrollbar">
        <h4 className="filter-title">Filters</h4>
        <div className="price-filter">
            <p style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px"}}>$</p>
            <p>$$</p>
            <p>$$$</p>
            <p style={{border:"none",borderTopRightRadius:"20px",borderBottomRightRadius:"20px"}}>$$$$</p>
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