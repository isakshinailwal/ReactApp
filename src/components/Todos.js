import React from 'react'
import Todo from './Todo'

export const Todos = (props) => {
  return (
    <>
     <div className='container'>
         <h3>Todos List </h3>
         <Todo array ={props.array[0]}/>
         
         </div>
    
    </>
    
  )
}
export default Todos