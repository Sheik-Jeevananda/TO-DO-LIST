import React, { useState } from 'react'

function Color() {
    const [color , setColor] =useState('black');
    const [data , setData] = useState('')

    const handleChange = (e) => {
        console.log(e.target.value)
        setData(e.target.value)
    }

    const handleclick = () =>{
        setColor(data)
    }
  return (
    <div>
        <div 
        className='palet' 
        style={{
            backgroundColor :`${color}`
        }}
         />

        <label>Select Color :
        <input 
                 type='color'
                 onChange={handleChange}
                 />
        </label>    
        <br />

        <button 
        className='aply'
        onClick={handleclick}>Apply</button>

    </div>
  )
}

export default Color