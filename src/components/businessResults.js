import React from "react";
import Filters from "./filters"
import Results from "./results"


function BusinessResults(){
    return(
    <div className="business-results">
       <Filters />
       <Results />
       <div className="maps">

       </div>

    </div>)
}

export default BusinessResults;