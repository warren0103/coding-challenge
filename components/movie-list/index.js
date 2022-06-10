import MovieCard from "./card"
import styles from "../../styles/movie_list.module.scss";
const MovieList = ({movies})=> {
    return (
        <ul className={styles.movie_list}>
            {movies.length && movies.map((movie, index)=>(<MovieCard movie={movie} key={index} />))}
            {movies.length === 0 && <h2> No movies found!</h2>}
        </ul>
    )
}

export default MovieList