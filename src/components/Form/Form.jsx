// import styles from './Form.module.css'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
import { Button } from '../ui/Button'
/* import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField'; */

export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        addMessage({
            author: AUTHOR.user,
            text
        })

        console.log('input', text)
        setText('')
    }


    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                {/*                 <ITextField
                    id="standard-basic"
                    label="Enter message"
                    variant="standard"
                    type="text"
                    onChange={(event) => setText(event.target.value)}
                    value={text}
                /> */}



                <Button type="submit">Add message</Button>
                {/*                <IButton
                    variant="contained"
                    color="success"
                    size="small"
                    type="submit"
                >
                    Add message
                </IButton> */}
            </form>
        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}