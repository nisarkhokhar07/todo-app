import React from 'react'
import  ExtractTodos  from './extractTodos'

export const TodoList = () => { 

    const {data , error} = ExtractTodos();
    console.log(data);
    // const datakeys = Object.keys(data);
  return (
    <div>
            
                {/* datakeys.map((key) => (<li key={key.id}>{data[key].title}</li>)) */}
                {error && <div>{error.message}</div> }
                {data.length && data.map((item) => (<li key={item.id}>{item.title}</li>))}
            
    </div>
  )
}
