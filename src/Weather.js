import React,{Component} from 'react'
const Weather =(props)=>{
    //if first Props excist then do the secound line
        return(
            <div className="weather-desc">
             {props.tempreature && <p>Tempreature :{props.tempreature}</p> } 
             {props.city && <p>City :{props.city}</p>}
             {props.country &&   <p>Country :{props.country}</p>}
             {props.humiditry && <p>Humiditry :{props.humiditry}</p> }
             {props.description &&   <p>Description :{props.description}</p>}
{props.error && <h2>error:{props.error}</h2>}

            </div>
        )
      
}
export default Weather;
