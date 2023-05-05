import { useContext } from "react";
import { globalContext } from "../Context/Context";

const Favorite = () => {
    const {addToFavorites,removeFromFavorites,favorites} = useContext(globalContext);
    return (
    favorites.length > 0 ? favorites.map((e,i) =>{
      return (<div className='gridContainer'>
      <figure className="movie">
  <div className="movie__hero" key={i}>
  <img src={e.image} alt="Rambo" className="movie__img"/>
  </div>
  <div className="movie__content">
  <div className="movie__title">
  <h1 className="heading__primary">{e.title}<i className="fas fa-fire"></i></h1>
  <div className="movie__tag movie__tag--1">{e.genre[0]}</div>
  <div className="movie__tag movie__tag--2">{e.genre[1]}</div>
  </div>
  <p className="movie__description">
  {e.description}
  </p>
  <div className="movie__details">
  <p className="movie__detail"><span className="icons icons-red"><i className="fas fa-camera-retro"></i> </span>{e.director[0]}</p>
  <p className="movie__detail"><span className="icons icons-grey"><i className="fas fa-clock"></i> </span>{e.year}</p>
  <p className="movie__detail"><span className="icons icons-yellow"><i className="fas fa-file-invoice-dollar"></i>
    </span>{e.rating}</p>
  </div>
  </div>
  {favorites.includes(e) ? (
  <button id ="add" onClick={() => removeFromFavorites(e)}>Remove </button>
) : (
  <button id="remove" onClick={() => addToFavorites(e)}>Add to Favorites</button>
)}
  <div className="movie__price">{e.rank}</div>
  </figure>
  </div>
    )}) : "NO FAVORITE MOVIES"
    )
  }

  export default Favorite