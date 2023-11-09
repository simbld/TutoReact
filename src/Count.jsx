import { useState } from "react";


function Count () {

    const [person, setPerson] = useState({
        firstName: 'John',
        lastName: 'Doe',
        age: 18
    })


        const increment = () => {

            setPerson({...person, age: person.age + 1})

    }
        return <>
            <p>Age de {person.firstName} : {person.age}</p>
            <button onClick={increment}>Incremente une année</button>

        </>
}

export default Count;