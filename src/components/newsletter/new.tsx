import { ChangeEvent, FormEvent, useState } from 'react'
import { SimpleButton } from 'components/button'
import { api } from 'components/services/api'
import { Loading } from 'components/loading'
import { Input } from 'components/input'
import styles from './styles.module.css'

type NewNewsLetterProps = {
    updateState: (value: boolean) => void
}
export const NewNewsLetter = ({ updateState }:NewNewsLetterProps) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [loading, setLoading] = useState(false)

    function validateInputs(event: FormEvent){
        event.preventDefault()
        
        const validEmail = validateEmail(email)
        
        if(name && validEmail) {
            handleSubmit()
        }
        setNameError(name ? '' : 'Preencha com seu nome completo')
        setEmailError(validEmail ? '' : 'Preencha com um e-mail válido')
    }    

    function validateEmail(email: string) {
        const REGEX_Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
        return REGEX_Email.test(email)
    }

    function updateName(event: ChangeEvent<HTMLInputElement>) {
        setNameError('')
        setName(event.target.value)
    }
    function updateEmail(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setEmailError('')
        setEmail(event.target.value)
    }

    async function handleSubmit() {
        setLoading(true)
        const body = {
            name,
            email
        }
        try {
            const { status } = await api.post('/newsletter', body)
            status === 200 ? updateState(false) : updateState(true)
        }
        catch(error) {
            console.log(error); 
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form className={styles.container} onSubmit={validateInputs}>
            <h2 className={styles.title}>
                Participe de nossa news com promoções e novidades!
            </h2>
            <div className={styles.content}>
                <Input 
                    type="text" 
                    placeholder='Digite seu nome' 
                    value={name}
                    onChange={updateName}
                    errorMessage={nameError}
                />
                <Input 
                    type="email" 
                    placeholder='Digite seu email'
                    value={email}
                    onChange={updateEmail}
                    onInvalid={validateInputs}
                    errorMessage={emailError}
                />
                <SimpleButton className={`${styles.button} ${(nameError || emailError) ? styles.error : ''}`}>
                    {
                        loading 
                        ? <Loading />
                        : 'Eu quero!'
                    }
                </SimpleButton>
            </div>
        </form>
    )
}