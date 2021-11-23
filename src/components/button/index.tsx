import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

export const SimpleButton = ({ children, className, ...rest }:ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={`${styles.container} ${className}`} { ...rest }>
            { children }
        </button>
    )
}