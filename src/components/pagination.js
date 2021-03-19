import React, { useContext } from "react"
import { act } from "react-dom/test-utils";
import { useState } from "react/cjs/react.development"
import { searchContext } from "../searchContext";

function Pagination(){

     const pages_arr = new Array(10).fill(null)


    const {activePage,changeActivePage} = useContext(searchContext); 
    
     function changePage(e){
         
        const id = e.currentTarget.id;
        if(id !== "next"){
            changeActivePage(Number(id))   
        }else{
            if(activePage === 9){
                changeActivePage(1)
            }else{
            changeActivePage(activePage+1)}
        }
     }

     const pages =  pages_arr.map((val,i) => {
        if(activePage === i+1){
            return  <span className="pageNo active-page" onClick={changePage} id={i+1}>{i+1}</span>
        }else if(i === 9){
            return <span className="pageNo" onClick={changePage} id="next"> &gt; </span>
        }
        else{
            return <span className="pageNo" onClick={changePage} id={i+1}>{i+1}</span>
        }
     })

    return(
    <div className="pagination"> 
        <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>
            {pages}
        <hr style={{border:"0.5px solid #EEEEEF",margin:"1em 0"}}/>
    </div>)
}

export default Pagination