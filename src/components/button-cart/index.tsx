import { ReactComponent as Cart } from 'assets/shopping-cart.svg'
import { ButtonHTMLAttributes } from 'react'
import styles from './styles.module.css'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    quantity: number
}
export const MiniCart = ({ quantity = 0, ...rest }:ButtonProps) => {
    return (
        <button className={styles.container}  { ...rest }>
            <Cart />
            <span className={styles.quantity}>
                { quantity }
            </span> 
        </button>
    )
}