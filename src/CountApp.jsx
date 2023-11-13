import { useState } from "react";


function CountApp () {

    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 18
    })

    const [count, setCount] = useState(0)

    const incrementAge = () => {

            setPerson({...person, age: person.age + 1}) // recupère tout l'objet person puis grace a la clé modifie le
        }
        
    const incrementCount = () => {
        setCount(count + 1)
    }

    
    
    return <>
            <p>Age de {person.firstName} : {person.age}</p>
            <button onClick={incrementAge}>Incremente une année</button>
            <button onClick={incrementCount}>Incrémenter le Compteur {count}</button>

        </>
}

export default CountApp;