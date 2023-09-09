import { useState } from "react"

export default function(){
    const [count, setCount]= useState (0);

    const handleAdd = () => {
        const newCount = count + 1 ;
        setCount(newCount)
    }

    const handleReduct = () => {
        const newCount = count - 1 ;
        setCount(newCount)
    }

    return (
        <div style={{border : '2px solid red'}}>
            <h3>counter : {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduct}>Reduce</button>
        </div>
    )

}