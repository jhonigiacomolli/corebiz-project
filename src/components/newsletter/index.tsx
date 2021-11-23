import { SimpleButton } from 'components/button'
import { Input } from 'components/input'
import { useState } from 'react'
import styles from './styles.module.css'

export const Newsletter = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Participe de nossa news com promoções e novidades!
            </h2>
            <div className={styles.content}>
                <Input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    value={name}
                    errorMessage={nameError}
                />
                <Input 
                    type="email" 
                    placeholder='Digite seu email'
                    value={email}
                    errorMessage={emailError}
                />
                <SimpleButton className={`${styles.button} ${(nameError || emailError) ? styles.error : ''}`}>
                    Eu quero!
                </SimpleButton>
            </div>
        </div>
    )
}