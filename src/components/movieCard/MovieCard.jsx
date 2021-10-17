import { Link } from 'react-router-dom';
import { getMovieImg } from '../../utils/getMovieImg';
import styles from './MovieCard.module.css'

export function MovieCard({ movie }) {
    const imageUrl = getMovieImg(movie.poster_path, 300);
    return (
    <li className={styles.movieCard}>
        <Link to={"/movies/" + movie.id}>
            <img 
                width={230}
                height={345}
                className={styles.movieImage}
                src={imageUrl}
                alt={movie.title}
            />
            <div className={styles.movie__title}>{movie.title}</div>
        </Link>
    </li>
    )
}