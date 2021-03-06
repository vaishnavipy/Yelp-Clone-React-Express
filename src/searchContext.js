import React,{useState} from "react"
import { useEffect } from "react/cjs/react.development";
import {useHistory, useParams} from "react-router-dom";
const axios = require("axios")
const searchContext = React.createContext();


function SearchContextPorvider({children}){

    const [activePage,setActivePage] = useState(1);

   const [urlParams,setUrlParams] = useState({term:"",location:"",price:"",category:""})

    const [result,setResult] = useState([]);

    const [cartArr,setCartArr] = useState([])

    const history = useHistory()


    function changeActivePage(no){
        setActivePage(no)
    }

    function fetchYelpData(term="food",location="houston,texas",price="1,2,3,4", category=""){
        var offset = (activePage-1) * 20;
        localStorage.setItem("input",`{term:"${term}",location:"${location}"}`)

        setUrlParams({term,location,price,category})
console.log("fetch")
        axios.post("/yelp/business/search",{term:term,location:location,price:price,offset:offset,category:category})
        .then(response => {
            setResult(response.data)
           console.log(response.data)
        })


    }


    useEffect(()=>{
        var offset = (activePage-1) * 20;

        localStorage.setItem("activePage",activePage)

        if(result.length < activePage*20){
            axios.post("/yelp/business/search",{term:urlParams.term,location:urlParams.location,offset:offset,price:urlParams.price})
            .then(response => setResult(prevState => [...prevState,...response.data] ))
        }

       
    },[activePage])

  function handleAddToCart(item){
       setCartArr(prevState => [...prevState,item])
   }
   function deleteCartItem(index){

    setCartArr(prevState => prevState.filter((elm,i) => i !== index))

   }

   function showBusinessDetails(name,id){
    history.push(`/biz/name=${name}/id=${id}`)
}


    return(
        <searchContext.Provider value={{activePage,changeActivePage,result,fetchYelpData,cartArr,handleAddToCart,deleteCartItem,showBusinessDetails}}>
            {children}
        </searchContext.Provider>
    )
}

export {searchContext,SearchContextPorvider}