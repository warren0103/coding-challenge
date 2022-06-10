import Error from "../components/error";
import Loading from "../components/loading";
import { useGetMovies } from "../hooks";
import MovieList from "../components/movie-list";
const Page = ()=> {
    let data = useGetMovies("https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17");
    let {loading, error, movies} = data;

    if(loading) return <Loading />
    if(error) return <Error />
    return (
        <main>
            <h1> Popular Movies </h1> 
            <MovieList movies={movies} />
        </main>
    )
}

export default Page;