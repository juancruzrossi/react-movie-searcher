import styles from "./MovieDetails.module.css";

import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAPIData } from "../utils/httpClient";

import { Spinner } from "../components/spinner/spinner"
import { getMovieImg } from "../utils/getMovieImg";


export function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        setIsLoading(true);

        getAPIData(`/movie/${movieId}`)
        .then(data => {
            setMovie(data);
            setIsLoading(false);
        });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />
    }

    if (!movie) {
        return null;
    }
    

    const imageUrl = getMovieImg(movie.poster_path, 500);
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.col}>
                <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
                <div className={styles.extra__details}>
                    <div className={styles.rating}>
                        Rating: {movie.vote_average * 10} / 100
                    </div>
                    <div>
                        {movie.vote_count} votes
                    </div>
                </div>
            </div>
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title: </strong>{movie.title}</p>
                <p>
                   <strong>Genres: </strong> 
                   {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description: </strong>
                    {movie.overview}
                </p>
                <p>
                <strong>Release Date: </strong>
                    {movie.release_date}
                </p>
            </div>
        </div>
    );
};