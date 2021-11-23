import { useState } from 'react'
import { NewsLetterMessage } from './message'
import { NewNewsLetter } from './new'

export const Newsletter = () => {
    const [newNewsLetter, setNewNewsLetter] = useState(true)

    function updateState(value: boolean) {
        setNewNewsLetter(value)
    }

    return (
        newNewsLetter 
        ? <NewNewsLetter updateState={updateState} />
        : <NewsLetterMessage updateState={updateState} />
    )
}