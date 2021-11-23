import styles from './styles.module.css'
import { ReactComponent as SearchIcon } from 'assets/search.svg'
import { HTMLAttributes } from 'react'

export const SearchBar = ({ className = '', ...rest }:HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`${styles.container} ${className}`} { ...rest }>
            <input type="text" placeholder="O que está procurando?" />
            <SearchIcon />
        </div>
    )
}