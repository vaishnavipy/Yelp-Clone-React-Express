import React, { useContext, useRef, useState } from "react"
import { useParams } from "react-router"
import { useEffect } from "react/cjs/react.development";
import {AiFillInfoCircle,AiOutlineComment} from "react-icons/ai"
import {MdRestaurantMenu} from "react-icons/md"
import { IoMdAddCircle } from "react-icons/io";
import { searchContext } from "../searchContext";
import getStars from "../utils/getStars"


function RestuarantDetails({info,restuarantReviews}){

    const menu = useRef(null);
    const reviews = useRef(null);
    const about = useRef(null);

    const {handleAddToCart,cartArr,deleteCartItem} = useContext(searchContext);

    const priceArr = [{item : "MeatPizza",price:15},{item:"CheesePizza",price:10}]

    function handleChangeAccordion(e){
        const menus = document.querySelectorAll(".accordion-menus");
        const accordion_content = document.querySelectorAll(".accordion-content");
        if(e.target.nodeName === "H3"){
            menus.forEach(elm => {
                if(elm.classList.contains("active-accordion")){
                    elm.classList.remove("active-accordion")
                }
            })
            accordion_content.forEach(elm => {
                if(elm.classList.contains("active-accordion-content")){
                    elm.classList.remove("active-accordion-content")
                }
            })

            e.target.classList.add("active-accordion");
            if(e.target.id === "menu"){
                menu.current.classList.add("active-accordion-content")
            }else if(e.target.id === "reviews"){
                reviews.current.classList.add("active-accordion-content")

            }else if(e.target.id === "about"){
                about.current.classList.add("active-accordion-content")
            }

        }
    }

    function addToCart(e){
        console.log(e.currentTarget.id)
        let item = priceArr.find(obj => obj.item === e.currentTarget.id)

        handleAddToCart(item)
        console.log(item)

    }

    return(
        <div style={{backgroundColor:"#EBEDF3",height:"auto",padding:"3em 0"}}>
            <div className="restuarant-details container2">
                <div className="details-left">
                    <div className="accordion" onClick={handleChangeAccordion}>
                        <h3 id="menu" className="active-accordion accordion-menus"><MdRestaurantMenu /> Menu</h3>
                        <h3 id="reviews" className="accordion-menus"><AiOutlineComment /> Reviews</h3>
                        <h3 id="about" className="accordion-menus"><AiFillInfoCircle /> About</h3>
                    </div>
                    <div className="accordion-content-container">
                        <div ref={menu} className="accordion-content active-accordion-content" >
                            <h3 >Our Popular Choices</h3>
                            <div className="menu-flex">
                                <div className="menu-items-flex">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/react-quick-food.appspot.com/o/itemImage%2F01RMu0ADIAVD8n1wx6AGB9BRJ9o2%2Fmeat_veg.png?alt=media&token=25ecab97-11e9-4a88-b5a5-524cd0506f6c"/>
                                    <div>
                                        <h4>Meat Pizza</h4>
                                        <p>With Cheese add-on</p>
                                    </div>
                                </div>
                                <div className="menu-items-flex">
                                        <p>15 $</p>
                                        <p style={{color:"#F43939",fontSize:"1.5rem"}} onClick={addToCart} id="MeatPizza"><IoMdAddCircle/></p>
                                </div>
                            </div>
                            <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>
                            <div className="menu-flex">
                            <div className="menu-items-flex">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/react-quick-food.appspot.com/o/itemImage%2F01RMu0ADIAVD8n1wx6AGB9BRJ9o2%2Fmeat.png?alt=media&token=b0e40801-10a0-42e5-9113-2f969958adef"/>
                                    <div>
                                        <h4>Cheese Pizza</h4>
                                        <p>With Cheese add-on</p>
                                    </div>
                                </div>
                                <div className="menu-items-flex">
                                        <p>10 $</p>
                                        <p style={{color:"#F43939",fontSize:"1.5rem"}} onClick={addToCart} id="CheesePizza"><IoMdAddCircle/></p>
                                </div>
                            </div>
                            <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>

                        </div>
                        <div ref={reviews} className="accordion-content">
                            <ReviewAccordion restuarantReviews={restuarantReviews}/>
                        </div>
                        <div ref={about} className="accordion-content ">
                            <h2 >Overview {info.name}</h2>
                            <p>
                                Base prepared fresh daily. Extra toppings are available in choose extra Choose 
                                you sauce: Go for BBQ sauce or piri piri sauce on your pizza base for no extra cost. 
                                Choose your cut: Triangular, square, fingers or Un cut on any size pizza
                            </p>
                        </div>
                    </div>
                </div>
                <div className="cart">
                    <div>
                    <h5>Your Cart</h5>
                    <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>
                    </div>
                    <div className="cart-items">
                        {cartArr.length === 0 ? <p style={{color:"green"}}>No items in your cart</p> : 
                        cartArr.map((elm,i) => 
                        
                        <div className="cart-flex">
                            <p>{elm.item}</p>
                           <div> 
                               <span>{elm.price} $</span>
                               <span className="delete-cart-item" id={i} onClick={()=>{deleteCartItem(i)}}> x</span>
                            </div>
                        </div>
                        
                        )}
                        
                    </div>
                    {cartArr.length !== 0 && 
                        <div className="cart-flex cart-total">
                            <span>Total</span>
                            <span>{cartArr.reduce((sum,elm) => sum + elm.price,0)} $</span>
                        </div>}
                    <button>Confirm  Order</button>
                </div>
            </div>
        </div>
    )
}

function ReviewAccordion({restuarantReviews}){

    const reviews = restuarantReviews.map((review,i) => {
        const rating_arr = new Array(5).fill(null);
        return(
        <div key={i} className="review">
            <div className="review-flex">
                <div className="review-user-img">
                   {review.user.image_url && <img src={review.user.image_url} />} 
                </div>
                <p>{review.user.name}</p>
            </div>
            <p className="star-p">{rating_arr.map((elm,i) => <span className="stars"> {getStars(review.rating,i+1)}</span>)} {review.time_created}</p>
            <p>{review.text}</p>
        </div>)
    })

    return(
    <div>
        {reviews}
    </div>)
}

export default RestuarantDetails