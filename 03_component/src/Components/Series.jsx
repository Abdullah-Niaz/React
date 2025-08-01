import { useState } from "react";
import "../App.css";

import SeriesDataJ from "./SeriesDataJ";

import seriesData from "../api/seriesData.json";

function Series() {


  const [count, setCount] = useState(0);
    return (
        <ul>
        {
            seriesData.map((currEle) => (
                <SeriesDataJ key={currEle.id} currEle={currEle}/>

            ))
        }   
    </ul>
    );
}

// const WellcomeComponent = (props)=>{
//   return (
//    <div className="mainContainer">
//         <div className="imageCard">
//         <img src={props.src} alt="" />
//         </div>
//         <div className="contentCard">
//           <h1>{props.name}</h1>
//           <h3>Rating: {props.rating}</h3>
//           <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aut officiis facilis! Quasi voluptatibus ipsa consequatur alias sint a deleniti, nam eius exercitationem consequuntur quidem similique eos sunt quibusdam optio!</p>
//           <button>{props.age > 18 ? "Watch Now" : "Not Avaiable"}</button> You're: <span style={{color: "red", fontStyle:"bold"}} >{props.age}+</span>
//         </div>
//       </div>
//   )
// }

export default Series;
