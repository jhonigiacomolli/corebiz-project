import styles from './styles.module.css'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as UserIcon } from 'assets/user.svg'
import { SearchBar } from 'components/search-bar'
import { Button } from 'components/button-icon'
import { MiniCart } from 'components/button-cart'

export const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <SearchBar />
            <Button text='Minha Conta' kind='primary' icon={UserIcon} />
            <MiniCart quantity={0} />
        </header>

    )
}