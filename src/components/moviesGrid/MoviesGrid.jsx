import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { getAPIData } from "../../utils/httpClient";
import { MovieCard } from "../movieCard/MovieCard";
import { Spinner } from "../spinner/spinner";
import styles from "./MoviesGrid.module.css";


export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let query = useQuery();
    const search = query.get("search");

    useEffect(() => {

        setIsLoading(true);
        
        let searchURL = search 
            ? "/search/movie?query=" + search
            : "/discover/movie";

        getAPIData(searchURL)
        .then(data => {
            setMovies(data.results);
            setIsLoading(false);
        });
        

    },[search]);

    return (
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
            {isLoading && <Spinner />}
        </div>
    );
}
