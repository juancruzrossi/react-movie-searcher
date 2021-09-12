import styles from "./searchBar.module.css";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useQuery } from "../../hooks/useQuery";


export function SearchBar() {
    let query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText);
    }

    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit} onKeyUp={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Search Movies..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={18} />
                </button>
            </div>
        </form>
    )
}