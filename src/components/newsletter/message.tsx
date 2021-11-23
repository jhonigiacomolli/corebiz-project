import { SimpleButton } from 'components/button'
import styles from './styles.module.css'

type NewsLetterMessageProps = {
    updateState: (value: boolean) => void
}
export const NewsLetterMessage = ({ updateState }: NewsLetterMessageProps) => {
    return (
        <div className={styles.container} >
            <div className={styles.message}>
                <h2>Seu e-mail foi cadastrado com sucesso!</h2>
                <p>A partir de agora você receberá as novidades e ofertas exclusivas</p>
                <SimpleButton className={styles.button} onClick={() => updateState(true)}>
                    Cadastrar novo e-mail
                </SimpleButton>
            </div>
        </div>
    )
}