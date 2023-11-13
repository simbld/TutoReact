import {useState} from "react";

function FormApp() {
    const [firstname, setFirstname] = useState('John Doe')
    const handleChange = (e) => {
        setFirstname(e.target.value)
    }

    return <form>
        <input type="text" name="firstname" value={firstname} onChange={handleChange}/>
        {firstname}
    </form>
}

export default FormApp