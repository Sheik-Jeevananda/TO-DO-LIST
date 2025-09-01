import React from 'react'
import { useState } from 'react'
function Login() {
    const[username , setUsername]=useState("");
  return (
    <div className='login'>
       <div className="login1">
        <h2 className='login_head'>Login-Page</h2>
        <form>
            <input 
            type='text'
            placeholder='Enter Username'
            value={username}
            onChange={
                (e)=>{
                        setUsername(e.target.value)
                }
            }
            />
            <button type='submit' >Login</button>
        </form>
        </div>
       </div> 
  )
}

export default Login