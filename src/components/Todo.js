import React from 'react'

export const Todo = (props) => {
  return (
      <>
      <div>

          <h4>{props.title}</h4>
          <p>{props.desc}</p>
      </div>
    </>
  )
}
export default Todo
