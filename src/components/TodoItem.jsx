import classNames from 'classnames'
import React from 'react'

const TodoItem = ({id, task, isDone, createDate, onUpdate, onDelete }) => {
  return (
    <li key={id} className='pt-2 flex gap-2 items-center'>
      <input 
        type="checkbox" 
        checked={isDone} 
        onChange={() => {onUpdate(id)}} 
      />
      <strong className={
        classNames('py-2 text-lg', isDone ? 'line-through' : null)
      }>{task}</strong>
      <span className='ml-auto text-sm text-gray-400'>{createDate}</span>
      <button onClick={() => {onDelete(id)}}>삭제</button>
    </li>
  )
}

export default TodoItem