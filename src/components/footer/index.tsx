import styles from './styles.module.css'
import { ReactComponent as Logo } from 'assets/logo.svg'
import { ReactComponent as VtexLogo } from 'assets/vtex-logo.svg'
import { ReactComponent as MailIcon } from 'assets/mail.svg'
import { ReactComponent as HeadsetIcon } from 'assets/headset.svg'
import { Button } from 'components/button-icon'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.location}>
                    <h2 className={styles.title}>
                        Localização
                    </h2>
                    <p>Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                    <p>Alphavile SP</p>
                    <p>brasil@corebiz.ag</p>
                    <p>+55 11 3090 1039</p>
                </div>
                <div className={styles.contact}>
                    <Button 
                        text="Entre em contato" 
                        kind="secondary" 
                        icon={MailIcon} 
                    />
                    <Button 
                        text="Fale com nosso consultor online" 
                        kind="secondary" 
                        icon={HeadsetIcon} 
                    />
                </div>
                <div className={styles.sponsors}>
                    <div className={styles.sponsor}>
                        Created by
                        <Logo className={styles.logo} />
                    </div>    
                    <div className={styles.sponsor}>
                        Powered by
                        <VtexLogo />
                    </div>
                </div>
            </div>
        </footer>
    )
}