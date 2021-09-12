import { MoviesGrid } from "../components/moviesGrid/MoviesGrid";
import { SearchBar } from "../components/searchBar/searchBar";

export function LandingPage() {
    return (
        <div>
            <SearchBar />
            <MoviesGrid />
        </div>
    )
}