import { useState, useEffect, useReducer } from 'react'
import TodoList from './components/TodoList'
import { Context } from './context'
import reducer from './reducer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos') || JSON.stringify([])))
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const addTodo = e => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle
      })

      setTodoTitle('')
    }
  }

  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <input type="text" value={todoTitle} onChange={e => setTodoTitle(e.target.value)} onKeyPress={addTodo} />
          <label>Todo name</label>
        </div>

        <DndProvider backend={HTML5Backend}>

          <TodoList todos={state} />

        </DndProvider>
      </div>
    </Context.Provider>
  );
}

export default App;
