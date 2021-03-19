import {BsStarFill,BsStar,BsStarHalf} from "react-icons/bs";


export default function getStars(rating,i){
    
    if(i <= rating){
        return <BsStarFill />
    }else if(i > rating && rating%1 !== 0){
        return <BsStarHalf />
    }else{
        return <BsStar />
    }

    
}

