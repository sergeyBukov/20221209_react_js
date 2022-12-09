import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FormFunc } from './components/func/Form'

export function App() {
    const [toggle, setToggle] = useState(true)
    const [arr, setArr] = useState([{ name: 'Biba' }, { name: 'Boba' }, { name: 'Giga' }, { name: 'Goga' }])

    return (
        <>
            <Form />
            <hr />
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'hide' : 'show'}</button>
            {toggle && <FormFunc title='Function Component!!!!!!' />}
            <ul>
                {arr.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
        </>
    )
}

// export default App