import styles from "../../styles/movie.module.scss";
import { useContext, useState } from "react";
import {context} from "../../context";
const MovieCard = ({movie}) => {
    const {likeMovie, db} = useContext(context);
    let { title, poster_path, vote_average, release_date, id} = movie;
    const [liked, setLiked] = useState(db[id] === true);
 


    function like_handler() {
        likeMovie(id)
        setLiked(!liked);
    }


    return (
        <li className={styles.movie}>
            <div className={styles.movie_poster}>
                <img src={`https://www.themoviedb.org/t/p/w260_and_h390_bestv2/${poster_path}`} />
                {/* <img src={`https://www.themoviedb.org/t/p/original${poster_path}`} alt={title} title={title} className={styles.poster} /> */}
            </div>
            <div className={styles.details}>
                <div className={styles.like_btn_container}>
                    {liked && <button className={styles.liked_btn} onClick={like_handler}> Liked </button>}
                    {!liked && <button className={styles.like_btn} onClick={like_handler}> Like </button>}
                </div>
                <p className={styles.title}> {title} </p>
                <p className={styles.release_date}> {release_date} </p>
                <p className={styles.rating}>
                    <b> {vote_average} </b>
                    <span> rating </span>
                </p>
            </div>
        </li>
    )
}

export default MovieCard