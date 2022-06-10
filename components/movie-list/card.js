import styles from "../../styles/movie_card.module.scss";
import { useContext, useState } from "react";
import {context} from "../../context";
const MovieCard = ({movie}) => {
    const {likeMovie, db} = useContext(context);
    let { title, poster_path, vote_average, id} = movie;
    const [liked, setLiked] = useState(db[id] === true);
 
    function like_handler() {
        likeMovie(id)
        setLiked(!liked);
    }

    return (
        <li className={styles.movie_card}>
            <div className={styles.movie_poster}>
                <img src={`https://www.themoviedb.org/t/p/w260_and_h390_bestv2/${poster_path}`} />
                {/* <img src={`https://www.themoviedb.org/t/p/original${poster_path}`} alt={title} title={title} className={styles.poster} /> */}
            </div>

            <div className={styles.btn_container}>
                <div className={styles.btns}>
                    {liked && <button className={styles.liked} onClick={like_handler}> Liked </button>}
                    {!liked && <button className={styles.like} onClick={like_handler}> Like </button>}
                </div>
            </div>
            <div className={styles.details}>
                <p className={styles.title}> {title} </p>
            </div>

        </li>
    )
}

export default MovieCard