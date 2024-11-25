import { format } from 'date-fns'
import React from 'react'

const TodoHd = () => {
  return (
    <div>
        <h2>{format(new Date(), 'yyyy.MM.dd')}</h2>
        <p>오늘 할 일을 적어보세요.</p>
      </div>
  )
}

export default TodoHd