import React, { useEffect, useState } from 'react'

function DigitalClock() {


   
       
  return (
    <div>

        <p>{hours} : {minutes} : {seconds} </p>
        <button>START</button>
        <button>STOP</button>

     
    </div>
  )
}

export default DigitalClock