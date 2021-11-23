import { InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    errorMessage?: string
}
export const Input = ({ errorMessage, ...rest }:InputProps) => {
    return (
        <div className={styles.container}>
            <input className={`${styles.input} ${errorMessage ? styles.error : ''}`} {...rest} />
            <span className={styles.error}>
                { errorMessage }
            </span>
        </div>
    )
}