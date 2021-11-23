import { ButtonHTMLAttributes, FunctionComponent, } from 'react'
import styles from './styles.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
    kind: 'primary' | 'secondary'
    icon: FunctionComponent
}
export const Button = ({ text, icon: Icon, kind = 'primary', className = '', ...rest }:ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[kind]} ${className}`} { ...rest }>
            <div>
                <Icon />
            </div>
            { text }
        </button>
    )
}