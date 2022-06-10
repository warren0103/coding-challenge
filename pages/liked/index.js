import { useGetMovies } from "../../hooks";
import Error from "../../components/error";
import Loading from "../../components/loading";
import MovieList from "../../components/movie-list";

const Page = ()=> {

    let data = useGetMovies(process.env.NEXT_PUBLIC_API);
    
    let {loading, error, movies} = data;
    
    if(loading) return <Loading />
    if(error) return <Error />
    return (
        <main>
            <h1> My Likes </h1> 
            <MovieList movies={movies} />
        </main>
    )
}

export default Page;