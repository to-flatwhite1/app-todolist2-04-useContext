"use client"

import classNames from 'classnames';
import React, { useContext, useRef, useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { useTodo } from '@/contexts/TodoContext';
import { useTheme } from '@/contexts/ThemeContext';

const TodoEditor = () => {
  const [task, setTask] = useState("");
  const inputRef = useRef();
  const {addTodo} = useTodo();
  const theme = useTheme();

  const onChangeTask = (e) => {setTask(e.target.value)}
  const onSubmit = () => {
    if (!task) return

    addTodo(task); 
    setTask("");
    inputRef.current.focus();
  }

  const onKeyDown = (e) => {
    if (e.key === "Enter") onSubmit()
    if (e.key === "Escape") {
        setTask("");
        inputRef.current.focus();
      }
  }

  const onCloseKey = () => {
    setTask("");
    inputRef.current.focus();
  }

  return (
    <div>
        <h2>새로운 Todo 작성하기</h2>
        <div>
          <form className='flex'>
            <div className='relative flex-1'>
              <input 
                type="text" 
                value={task} 
                ref={inputRef} 
                onKeyDown={onKeyDown} 
                onChange={onChangeTask} 
                placeholder="할 일을 입력하세요." 
                className={classNames(
                  'p-3 w-full ',
                  `text-${theme.white} bg-${theme.black}`,
                )} 
              />
              <button 
                disabled={!task} 
                onClick={onCloseKey}
                className={
                  classNames('absolute top-1 right-1 w-10 h-10  flex justify-center items-center', task ? 'text-black' : 'text-gray')
                  }>
                <IoCloseCircle />
              </button>
            </div>
            <button 
              type='submit'
              onClick={onSubmit} 
              disabled={!task} 
              className={
                classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')
              }>할 일 추가</button>
          </form>
        </div>
      </div>
  )
}

export default TodoEditor