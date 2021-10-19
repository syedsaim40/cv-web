import React, { useState } from "react"
function Hello(){
const[data,setdata]=useState(1)

function Counter()
{

    return(
        setdata(data+1)
    )
}

    return(
        <div>
            
        <h1 className="h1-style">hello Hamza Lun</h1>
        <h1> hello Hamza {data} Lun</h1>
        <button onClick={Counter}>Counter</button>
        </div>
    )
}
export default Hello