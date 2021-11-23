import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as UserIcon } from 'assets/user.svg'
import { SearchBar } from 'components/search-bar'
import { Button } from 'components/button-icon'
import { MiniCart } from 'components/button-cart'
import { useCart } from 'components/hooks/cart'
import styles from './styles.module.css'
import { ToggleMenu } from 'components/toggle-menu'

export const Header = () => {
    const { quantity } = useCart()
    return (
        <header className={styles.header}>
            <ToggleMenu className={styles.toggle}/>
            <Logo className={styles.logo} />
            <SearchBar className={styles.search} />
            <Button 
                className={styles.account} 
                text='Minha Conta' 
                kind='primary' 
                icon={UserIcon} 
            />
            <MiniCart 
                className={styles.cart} 
                quantity={quantity} 
            />
        </header>

    )
}