import React from "react";
const MovieCard = ({movie, handleSelect , selectedMovies}) =>{
    
return (
    <div className='box'> 
    <img src={movie.Poster}/> 
    <h2> {movie.Title} </h2>
    <p> {movie.Released}  </p> 
    <p> <b> Actors:</b>  {movie.Actors} </p>
    <i> <b> Rating </b> {movie.imdbRating} </i>
    <button  onClick={()=>{handleSelect(movie.Title)}} 
    className={selectedMovies.includes(movie.Title) ? "seen": "unseen" }> {selectedMovies.includes(movie.Title) ? "seen": "View"}  
    
    
     </button>
 </div> 
 

     
    )
}
export default MovieCard;



