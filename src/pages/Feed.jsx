import React from 'react';
import { useReducer,useState,useEffect } from 'react';

function Feed() {
    const [content , setContent] = useState("")
  return (
    <div className='feed'>
        <h2>Welcome</h2>
        <form>
            <textarea 
                value={content}
                placeholder="What's in your Mind"
                onChange={(e)=> setContent(e.target.value)}
                >

            </textarea>
            <button>POST</button>
        </form>



    </div>
  )
}

export default Feed