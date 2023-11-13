import {useState} from "react";

function FormNotControlled() {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(new FormData(e.target))
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" defaultValue="avevd"/>
        <button>Envoyer</button>
    </form>
}

export default FormNotControlled