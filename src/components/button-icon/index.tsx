import { ButtonHTMLAttributes, FunctionComponent, } from 'react'
import styles from './styles.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    text: string
    kind: 'primary' | 'secondary'
    icon: FunctionComponent
}
export const Button = ({ text, icon: Icon, kind = 'primary', ...rest }:ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[kind]}`} { ...rest }>
            <div>
                <Icon />
            </div>
            { text }
        </button>
    )
}