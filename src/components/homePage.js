import React, { useEffect } from "react"
import HomeBanner from "./homeBanner"
import deliverImg from "../images/delivery.png"
import dishImg from "../images/dish.png"
import Footer from "./footer"
import restuarantImg from "../images/restuarant.png"
const axios = require("axios");



function HomePage(){


    useEffect(()=>{
       
        axios.post("/yelp/business/search",{term: 'Four Barrel Coffee',location: 'san francisco, ca'})
        .then(response => console.log(response.data))
       
    },[])


    return(
    <div>
        <HomeBanner />   

        <div className="how-it-works">
            <div className="container2">
                <h1>How It Works</h1>
                <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                <div className="works-grid">

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

            <div className="barbeque-banner overshadow">
                <div className="container">
                    <h1>JUST ORDER AND WE WILL DELIVER YOU</h1>
                    <p>Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
                    <button className="hover">Order Now</button>
                </div>
            </div>

            <div className="how-it-works">
                <div className="container2">
                    <h1>FEATURED RESTAURANTS TEXAS</h1>
                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                </div>
            </div>
            
        </div>

        <Footer />

    </div>)
}

export default HomePage