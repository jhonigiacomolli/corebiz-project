import styles from './styles.module.css'
import { ReactComponent as SearchIcon } from 'assets/search.svg'

export const SearchBar = () => {
    return (
        <div className={styles.container}>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
        </div>
    )
}