import { useState } from "react";
import seriesData from "../api/seriesData.json";
import "../App.css";

function Series() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WellcomeComponent />
    </>
  );
}
const WellcomeComponent = (props) => {
  return (
    <>
      {seriesData.map(currFilm => (
        <div className="mainContainer" key={currFilm.id}>
          <div className="imageCard">
            <img src={currFilm.img_url} alt="" />
          </div>
          <div className="contentCard">
            <h2>{currFilm.name}</h2>
            <h3>Rating: {currFilm.rating}</h3>
            <p>Summary: {currFilm.description}</p>
            <p>Genre: {currFilm.genre}</p>
            <p>Cast: {currFilm.cast}</p>
            <a href={currFilm.watch_url} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      ))}
    </>
  );
};


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
