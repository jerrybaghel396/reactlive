import React from "react";
import Cardliststyle from './Cardliststyle.css'



function Cardlist({id, name,region,capital}) {
    return (

        <div className="container">
            <div className="another"  >
        <>   
            <h1 > Name :{name}  Capital : {capital}</h1>
            <span className="size">{region}</span>
        </>
            </div>        
                 
        </div>
   
      
    )
}


export default Cardlist;

