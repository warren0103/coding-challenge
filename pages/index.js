import { useContext } from "react";
import { useGetMovies } from "../hooks";
import {context} from "../context";
import Error from "../components/error";
import Loading from "../components/loading";

import MovieList from "../components/movie-list";
// const MovieList = ({movies})=> {
//     const Movie = ({movie})=> {
//         let {vote_average, title, poster_path} = movie;
//         console.log(movie)
//         const like = async ()=> {
//             try {
//                 alert(`movie liked ${title}`)
//             } catch (e) {
//                 console.log(e.message);
//             }
//         }
//         return (
//             <li className="movie-card-item">
//                 <div className="card">
//                     <img src={`https://www.themoviedb.org/t/p/original${poster_path}`} className="poster" />
//                     <div className="card-body">
//                         <div className="like-btn"> <button onClick={like}> LIKE</button> </div>
//                         <div className="card-details">
//                             <p className="movie-title">{title}</p>
//                             <p className="rating"> {vote_average} </p>
//                         </div>
//                     </div>
//                 </div>
//             </li>
//         )
//     }
//     return (
//         <ul className="movie-list">
//             <h1>popular movies</h1> 
//             {movies.map((movie, index)=> ( <Movie key={index} movie={movie} /> ))}
//         </ul>
//     )
// }


const Page = ()=> {
    const ctx = useContext(context);
    let data = useGetMovies("https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17");
    let {loading, error, movies} = data;

    return (
        <div className="content-wrapper">
            { loading && <Loading /> }
            { error && <Error /> }
            { movies && <MovieList movies={movies} list_type="Popular movies" /> }
        </div>
    )
}

export default Page;