import { useGetMovies } from "../../hooks";
import Error from "../../components/error";
import Loading from "../../components/loading";
import MovieList from "../../components/movie-list";

const Page = ()=> {

    let data = useGetMovies(process.env.NEXT_PUBLIC_API);
    let {loading, error, movies} = data;
    
    return (
        <div className="content-wrapper">
            { loading && <Loading /> }
            { error && <Error /> }
            { movies && <MovieList movies={movies} list_type="Liked Movies" /> }
        </div>
    )
}

export default Page;