import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as UserIcon } from 'assets/user.svg'
import { SearchBar } from 'components/search-bar'
import { Button } from 'components/button-icon'
import { MiniCart } from 'components/button-cart'
import { useCart } from 'components/hooks/cart'
import styles from './styles.module.css'

export const Header = () => {
    const { quantity } = useCart()
    return (
        <header className={styles.header}>
            <Logo />
            <SearchBar />
            <Button text='Minha Conta' kind='primary' icon={UserIcon} />
            <MiniCart quantity={quantity} />
        </header>

    )
}