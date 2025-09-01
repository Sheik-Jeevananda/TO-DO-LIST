import React, { useState } from 'react'

function Project() {

    //Tasks..
    const [ tasks , setTasks] = useState([]);

    const [ newtask , setNewtask] = useState("")


    const handleadd = () => {
                // --> task -> insert the value (newtask)

            if(newtask.trim() !==""){
                    setTasks(t => [...t,newtask]);
            }  
                setNewtask("")
                
    }

    const handlechange = (e) =>{
            setNewtask(e.target.value);
            // console.log(newtask)
    }

    const handledelete = (index) => {

      const UpdatedTasks =   tasks.filter((_, i )=> i !== index);
      setTasks(UpdatedTasks)
    }

    const handleuptask = (index) => {
      if(index>0){

        const uptasks = [...tasks];
        [uptasks[index] , uptasks[index-1]] = [uptasks[index-1], uptasks[index]]

        setTasks(uptasks);

      }
    }

    const handledowntask = (index) => {

      
      if(index < tasks.length- 1){

          const downtasks = [...tasks];
          [downtasks[index+1], downtasks[index]] = [downtasks[index] , downtasks[index+1]]
          setTasks(downtasks);
      }
    }
    
    

  return (
   <div className='Outer-div'>
            <h2 className='title'>TO-DO LIST</h2>

          <div className="input-div">
            <input type='text'  placeholder="Enter Task" value={newtask} onChange={handlechange} className='input-task'/>

            <button onClick={handleadd} className='add-button'>Add</button>
            <br />
          </div>
            
            
              <div className="tasks-div">
                <ol>
                    {
                        tasks.map((task, index)=>
                            <li key={index}>
                              <span className='tasks-span'>
                                <div className="text">{task}</div>

                                <button onClick={()=> handledelete(index)} className='delete-button'>Delete</button>
                                <button onClick={()=>{handleuptask(index)}} className='up-button'>👆</button>
                                <button onClick={()=>{handledowntask(index)}} className='down-button'>👇</button>
                                </span>  
                               
                            </li>
                        ) 
                    }
      
                </ol>
               </div> 
            
    </div>
  )
}

export default Project