import logo from './logo.svg';
import './App.css';
import {  useEffect, useRef, useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';

function App() {

const[list,setlist]=useState([
 
  { name:"la casa del papel",imgsr:"https://resize.programme-television.ladmedia.fr/r/670,670/img/var/premiere/storage/images/tele-7-jours/news-tv/la-casa-de-papel-netflix-que-vaut-la-saison-5-4676832/99576756-1-fre-FR/La-Casa-de-Papel-Netflix-Que-vaut-la-saison-5.jpg",rate:"4"},
  {name:"prison breack",imgsr:"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/81B830426805BFB41DCAC2E010EA45661FF55AC9F45D871DC0CEAF342376EFEF/scale?width=1200&aspectRatio=1.78&format=jpeg",rate:"3"},
  {name:"fantastic four",imgsr:"https://cdn.britannica.com/38/182838-050-F71E4278/image-Fantastic-Four.jpg",rate:"2.5"},
]) 

const[filtrerdList,setfilter]=useState(list)
useEffect(

()=>{
  setfilter(list)
},[list]) 


const p=useRef()
const p2=useRef()
const p3=useRef()
const p4=useRef()
const add=()=>{
  setlist([...list,{name:p.current.value,
    imgsr:p3.current.value,
    rate:p2.current.value,
    
  }])
}
const filtrer=()=>{
  setfilter(list.filter(e=>e.name.includes(p4.current.value)))
}
  return (
    <div className="App">
    
      <div className="name">
      <input type={"text"}ref={p}placeholder="name mouve"></input>
      
      <input type={"text"}ref={p2}placeholder="rate"></input>

      <input type={"text"}ref={p3}placeholder="image link"></input>
      
      <input type={"text"} onChange={filtrer} ref={p4}></input>
      
      
      <button onClick={add}className='button'>+</button>
      </div>
      <br></br>
      <div className='movielist'>
      {filtrerdList.map(e=>
      
      <p className='deux'>
            <img src ={e.imgsr}></img>
        {e.name}
        <StarRatingComponent 
          name="rate2" 
         
          starCount={5}
          value={e.rate}
        />
  
      
      
      </p>)}
      </div>
    </div>
  );
}

export default App;
