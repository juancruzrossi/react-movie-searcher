import { ImSpinner9 } from 'react-icons/im';
import styles from "./spinner.module.css";


export function Spinner() {
    return (
        <div className={styles.spinner}>
            <ImSpinner9 className={styles.spinning} size={80} />
        </div>
    )
}