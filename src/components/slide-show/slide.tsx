import styles from './styles.module.css'
import { ReactComponent as Cover} from 'assets/banner.svg'
import image from 'assets/image-2.png'

export const Slide = () => {
    return (
        <div className={styles.slide}>
            <div className={styles.background}>
                <div className={styles.overlay}>
                    <Cover preserveAspectRatio='none' />
                </div>
                <img src={image} alt="slide" />
            </div>
            <div className={styles.content}>
                <div className={styles.centerContent}>
                    <h1>Olá, o que você está buscando?</h1>
                    <h2>Criar ou migrar seu e-commerce?</h2>
                </div>
            </div>
            <div className={styles.slider}>
                <span className={styles.active} />
                <span />
                <span />
                <span />
            </div>
        </div>
    )
}