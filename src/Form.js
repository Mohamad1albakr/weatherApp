import React,{Component} from 'react'
const Form = (props)=>{
  

   
   
        return( 
             <form onSubmit={props.getWeather} className="form">
             <input type ="text" name="city" placeholder = "City..."/><br></br>
             <input type ="text"  name="country" placeholder = "Country..."/><br></br>
             <button>Get Weather</button>
             
              </form>
            )
      
    }

export default Form;
