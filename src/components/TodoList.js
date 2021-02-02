import React from 'react'
import TodoItem from './TodoItem'


export default function TodoList({ todos }) {
  
  return (
    <>
      <ul>
        {todos && todos.map((el, index) => <TodoItem key={el.id} {...el} />)}
      </ul>
    </>
  )
}

