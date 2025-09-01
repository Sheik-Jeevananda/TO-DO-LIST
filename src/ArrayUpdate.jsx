import React, { useState } from 'react'

function ArrayUpdate() {

    const [fruits, setFruits] = useState(["Apple", "Banana", "Guava"])

    const handleclick = () => {

        const fruit = document.getElementById("fruit").value;
        document.getElementById("fruit").value = "";

        setFruits([
            ...fruits,
            [fruit]
        ])

    }

  return (
    <div>
        
      <ul>
        {fruits.map((fruit ,index) => <li key={index}>{fruit}</li>)}
      </ul>

       

        <input 
        type='text'
        placeholder='Enter Fruit: '
        id='fruit'
                 />

        <button onClick={handleclick}>Add Element</button>

    </div>
  )
}

export default ArrayUpdate