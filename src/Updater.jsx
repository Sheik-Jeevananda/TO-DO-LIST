import React, { useState } from 'react'

function Updater() {

    const [car , setCar] = useState({year:2025, 
                                    company:"suzuki",
                                    model:"JEEVA"})

    const handlechange  = (e) => {
        <button>Apply</button>
          setCar(
           { ...car,
           [ e.target.name] : e.target.value}
          )
    }                                  

  return (
    <div>
                    

             <input type='text' placeholder='Year' name='year'  value= {car.year} onChange={handlechange}/>

             <br />

             <input type='text' placeholder='Company' name='company' value={car.company} onChange={handlechange}/>

             <br />

             <input type='text' placeholder='Model'  name='model' value={car.model}  onChange={handlechange}/>  

             <br /> 

            


              <h2>CAR DATA</h2>
                      <p>Year:  {car.year} <br/>
                         Company:  {car.company} <br />
                         Model : {car.model}</p>        
    </div>
  )
}

export default Updater