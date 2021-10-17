import styles from "./searchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/useQuery";


export function SearchBar() {

    const query = useQuery();
    const search = query.get("search") ?? "";

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search Movies..."
                    value={search}
                    onChange={(e) => {
                        const value = e.target.value;
                        history.push("/?search=" + value);
                    }}
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={18} />
                </button>
            </div>
        </form>
    )
}