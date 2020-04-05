import React from "react"

const Pet = ({ name, animal, breed }) => {    
    return (
        <div>
            <p>{name}</p>
            <p>{animal}</p>
            <p>{breed}</p>
            <hr/>
        </div>
    )
}

export default Pet