import React, { useState } from "react"
import {BiSearch} from "react-icons/bi"
import { useHistory } from "react-router"
const axios = require("axios")



function SearchBar(){

    const [input,setInput] = useState({term:"",location:""})

    let history = useHistory()

    function handleSearchBusiness(){

        history.push(`/search/term=${input.term}&location=${input.location}`)

    }

    function handleChange(e){
        const {name,value} = e.target;
        setInput(prevState =>  ({...prevState,[name]:value} ) )
    }


    return(
        <div className="search">
                    <label>Find</label>
                    <input type="text" style={{borderRight:"1px solid gray"}} placeholder="restuarants.." name="term" value={input.term} onChange={handleChange}/>
                    <label>Near</label>
                    <input type="text" placeholder="Cypress,Texas" name="location" value={input.location} onChange={handleChange}/>
                    <span className="icons hover" onClick={handleSearchBusiness}><BiSearch/></span>
        </div>
    )
}

export default SearchBar