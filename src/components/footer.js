import React from "react"
import {AiOutlinePhone,AiOutlineMail} from "react-icons/ai"


function Footer(){
    return(
    <div className="footer">
        <div className="container2 footer-grid">
            <div>
                <h3>Popular Cities</h3>
                <hr />
                <ul>
                    <li>Hosuton</li>
                    <li>Austin</li>
                    <li>Dallas</li>
                    <li>San Antonio</li>
                    <li>Fort Worth</li>
                </ul>
            </div>
            <div>
                <h3>Popular Cuisnies</h3>
                <hr />
                <ul>
                    <li>American</li>
                    <li>Indian</li>
                    <li>Mexican</li>
                    <li>Italian</li>
                    <li>Cajun</li>
                </ul>
            </div>
            <div>
                <h3>Menu</h3>
                <hr />
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>FAQ's</li>
                    <li>How It Works</li>
                   
                </ul>
            </div>
            <div>
                <h3>Connect</h3>
                <hr />
                
                    <p></p>
                    <p><span className="icon"><AiOutlinePhone /></span>+1 123 456 7890</p>
                    <p><span className="icon"><AiOutlineMail/></span > info@foolove.com </p>
                   
               
            </div>
        </div>
        <hr className="container2"/>
        <p className="container2 copyrights">© 2021 LONE STAR DINING. ALL RIGHTS RESERVED. POWERED BY<a href="https://github.com/vaishnavipy" target="_blank">Vaish</a></p>
    </div>)
}

export default Footer