import React,{Component} from 'react';
import Weather from './Weather';
import Form from './Form';

import './App.css';
const APIKEY='40ebe8c0e71e98292b6b69e4e360c431'

class App extends Component{
  state={
    tempreature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''

  }

  getWeather= async(e)=>{
    e.preventDefault();
    const city= e.target.elements.city.value;
    const country= e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`);
    const data= await api.json();
    console.log(data);
   if(city&&country) {
    this.setState({
      tempreature:data.main.temp,
    city:data.name,
    country:data.sys.country,
    humidity:data.main.humidity,
    description:data.weather[0].description,
    error:''
    })
  } 
  else{
    this.setState({
      tempreature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'Erorr..! check the city & country please'

  })

    

   
}
  }
  render(){
    return (
      <div className="App">
      <h2 className="title">Lets's Check the Weather today :)</h2> 
 
       <Form getWeather={this.getWeather}/>
       <Weather 
        tempreature={this.state.tempreature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}

       />
      </div>
    );
  }
 
}

export default App;
