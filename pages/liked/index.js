import { useGetMovies } from "../../hooks";
import Error from "../../components/error";
import Loading from "../../components/loading";
import MovieList from "../../components/movie-list";
import { context } from "../../context";
import { useContext } from "react";

const Page = ()=> {

    const {db} = useContext(context);

    // we can use the localstorage, indexedDb as storage for liked movies
    // i have choosen to simply retrive the movies using an api, the filter the results for liked movies only
    let data = useGetMovies(process.env.NEXT_PUBLIC_API);
    
    let {loading, error, movies} = data;
    
    if(loading) return <Loading />
    if(error) return <Error />
    
    let filter_movies = movies.filter(movie => {
        return db[movie.id]
    })
    return (
        <main>
            <h1> My Likes </h1> 
            <MovieList movies={filter_movies} />
        </main>
    )
}

export default Page;