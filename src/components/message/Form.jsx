import { useState } from 'react'
import styles from './Form.module.css'

export function Form(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')


    const handleChange = (event) => {
        setName(event.target.value)
    }
    //в режиме разработчика можно увидеть сформированное имя
    // console.log('style', styles)
    console.log('props', props)

    return (
        <>
            <h1 style={{ color: 'red' }}>{props.title}</h1>
            <>
                <h5 className={styles.message}>Ваше сообщение: {name}</h5>
                <input type="text" placeholder="Введите Ваше сообщение" className={styles.message_input} onChange={handleChange} />
            </>
        </>
    )
}