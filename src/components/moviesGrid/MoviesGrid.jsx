import { useEffect, useState } from "react";
import { useQuery } from "../../hooks/useQuery";
import { getAPIData } from "../../utils/httpClient";
import { MovieCard } from "../movieCard/MovieCard";
import { Spinner } from "../spinner/spinner";
import styles from "./MoviesGrid.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { Empty } from "../../utils/Empty";

export function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {

        setIsLoading(true);
        
        let searchURL = search 
            ? "/search/movie?query=" + search + "&page=" + page
            : "/discover/movie?page=" + page;

        getAPIData(searchURL)
        .then(data => {
            setMovies(prevMovies => prevMovies.concat(data.results));
            setHasMore(data.page < data.total_pages);
            setIsLoading(false);
        });
        
    },[search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />
    }

    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >   
        <div>
            <ul className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </ul>
        </div>
            
        </InfiniteScroll>
    );
}
