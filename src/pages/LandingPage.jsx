import { MoviesGrid } from "../components/moviesGrid/MoviesGrid";
import { SearchBar } from "../components/searchBar/searchBar";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage() {

    const query = useQuery();
    const search = query.get("search") ?? "";

    const debouncedSearch = useDebounce(search, 300);

    return (
        <div>
            <SearchBar />
            <MoviesGrid key={search} search={debouncedSearch} />
        </div>
    )
}