import {useState} from "react";

function FormApp() {
    const [firstname, setFirstname] = useState('John Doe')
    const handleChange = (e) => {
        setFirstname(e.target.value)
    }
    const reset = () => {
    setFirstname('')
    }
    console.log('render')
    return <form>
        <input type="text" name="firstname"/>
        {firstname}
    <button onClick={reset} type="button">Reset</button>
    </form>
}

export default FormApp