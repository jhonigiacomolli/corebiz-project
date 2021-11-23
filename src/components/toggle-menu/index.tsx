import { HTMLAttributes } from 'react'
import styles from './styles.module.css'

export const ToggleMenu = ({ className = '', ...rest }:HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={`${styles.container} ${className}`}>
            <span className={styles.item} />
            <span className={styles.item} />
            <span className={styles.item} />
        </div>
    )
}