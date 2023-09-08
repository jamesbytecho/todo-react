


import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"

export default function App() {
  // create a new todo
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
    
  })

  //Persisting elements 
  //Save elements in local storage
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    console.log(todos)
  },[todos])

  function addTodo(title){
    setTodos(currentTodos => {
          return [...currentTodos, { id: crypto.randomUUID(), title, completed: false},
          ]
        })
  }
    //Check item
    function toggleTodo(id, completed) {
      setTodos(currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id) {
            return{
               ...todo, completed
            }
          }
          return todo
        })

      })
    }

    //Delete item
    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter (todo =>  todo.id !== id)
      })
    }
  return (
  <>
  <NewTodoForm onSubmit={addTodo} />
    
    <h1>Todo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> 

  </> 
  )
}

