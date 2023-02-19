import React from "react";

function Ored({ newOrdered, setNewOrdered, Ordered }) {
  

  const result = Ordered.map(ord=>{
    return(
      <div>
        {ord.name}
      </div>
    )
  })

  return(
    <div>dwadawdawdwadawdawdawdeawdaw{result}</div>
  )
}

export default Ored
