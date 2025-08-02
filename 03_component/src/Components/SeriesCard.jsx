import seriesData from '../api/seriesData.json'
const SeriesCard = (props) => {
  return (
    <>
      
        <div className="mainContainer" key={props.currEle.id}>
          <div className="imageCard">
            <img src={props.currEle.img_url} alt="" />
          </div>
          <div className="contentCard">
            <h2>{props.currEle.name}</h2>
            <h3><b>Rating: </b>{props.currEle.rating}</h3>
            <p><b>Summary: </b>{props.currEle.description}</p>
            <p><b>Genre: </b>{props.currEle.genre}</p>
            <p><b>Cast: </b>{props.currEle.cast}</p>
            <a href={props.currEle.watch_url} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
        </div>

    </>
  );
};

export default SeriesCard
