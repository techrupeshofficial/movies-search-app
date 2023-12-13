import  React, {useState} from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import LogoImg from './LogoImg';


function MovieSearch(){
    const[query,setQuery] = useState("")
    const [movies, setMovies] = useState([]);
    let [selectedMovies, setSelectedMovies] = useState([])

   
    const handSearch = async ()  =>{
      const apiKey = "4ee976e5"
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
      if(response.data) setMovies([...movies, response.data])
      setQuery("")
    }

    const handleKeyDown = async (eve)=>{
      if (eve.key === 'Enter'){
        const apiKey = "4ee976e5"
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&t=${query}`);
      if(response.data) setMovies([...movies, response.data])
      setQuery("")
      }
    }
  


 

    const handleSelect =(movieName) =>{
      setSelectedMovies([...selectedMovies, movieName])
    }





    return (
      <>
      <div id='main'>    
        <div id='bgimg'>  
          <LogoImg> </LogoImg>


            <div className='text'>
            <h1 id='head'> Welcome to MovieSearch </h1>
            <h2> Millions of movies, TV shows are Available Here You can Explore now. </h2>
            </div>

            <input id='searchInput' type='text' placeholder='Search Movie and Get Details.' value={query} onChange={(e)=> setQuery(e.target.value)}  onKeyDown={handleKeyDown} />  

            <button onClick={handSearch} disabled={query.trim().length === 0} className='searchBtn'> Search </button>
            </div>
         </div>





         <div id='card' className='zoom-img'>
         {
          movies.map((movie) =>  (
            <MovieCard movie = {movie} handleSelect={handleSelect}  selectedMovies={selectedMovies}  /> 
            ))
         }
         </div>


      </>
    )
}

export default MovieSearch;

