import styles from "./MainTitle.module.css"

export function MainTitle() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>

            <div className={styles.title}>
                <span className={styles.block}></span>
                <h1>Movie Searcher<span></span></h1>
            </div>

            <div className={styles.role} id="asdasd">
                <div className={styles.block}></div>
                <p>By Juan Cruz</p>
            </div>
            
        </div>
    </div>
    )
}