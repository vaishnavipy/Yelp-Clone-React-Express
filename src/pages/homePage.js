import React, { useEffect, useState } from "react"
import HomeBanner from "../components/homeBanner"
import deliverImg from "../images/delivery.png"
import dishImg from "../images/dish.png"
import Footer from "../components/footer"
import restuarantImg from "../images/restuarant.png"
import getStars from "../utils/getStars"
const axios = require("axios");




function HomePage(){


    const [featured,setFeatured] = useState([])

    useEffect(()=>{
       
        axios.post("/yelp/business/search",{term: 'takeout',location: 'Houston'})
        .then(response => {
           
            setFeatured(response.data.sort((a,b)=> b.review_count - a.review_count).slice(0,4));
        })
       
    },[])

    

    const featured_restuarants = featured.map((obj,i) => {

        const rating_arr = new Array(5).fill(null)
        return(
            <div className="featured-card" key={i}>
                            <div className="featured-card-img">
                                <img src={obj.image_url}/>
                            </div>
                            <div className="featured-card-content">
                                <h3>{obj.name}</h3>
                                <p> {rating_arr.map((elm,i) => <span className="stars"> {getStars(obj.rating,i)}</span>)} {obj.review_count} reviews</p>
                                <p>{obj.categories.map(obj => <span style={{textTransform:"capitalize"}}>{obj.alias},</span>)}</p>
                                <p>{obj.location.address1}, {obj.location.city}</p>
                            </div>


            </div>

        )
    })


    return(
    <div>
        <HomeBanner />   

        <div className="how-it-works">
                <div className="container2">
                    <h1>FEATURED RESTAURANTS TEXAS</h1>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                    <div className="col-4-grid">
                        {featured_restuarants}
                    </div>
                </div>
            </div>

        <div className="how-it-works">
           

            <div className="barbeque-banner overshadow">
                <div className="container">
                    <h1>YOU ORDER AND WE DELIVER </h1>
                    <p>Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
                    <button className="hover">Order Now</button>
                </div>
            </div>

            <div className="container2">
                <h1>How It Works</h1>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <div className="col-3-grid">

                    <div>
                        <div className="circle"><img src={restuarantImg} /></div>
                        <h3>Choose A Restaurant</h3>
                        <p>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                    </div>
                    <div>
                     <div className="circle"><img src={dishImg} /></div>
                        <h3>Choose A Tasty Dish</h3>
                        <p>Dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                    </div>
                    <div>
                        <div className="circle"><img src={deliverImg}/></div>
                        <h3>Pick Up Or Delivery</h3>
                        <p>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
                    </div>

                </div>
            </div>

            
            
        </div>

        <Footer />

    </div>)
}

export default HomePage