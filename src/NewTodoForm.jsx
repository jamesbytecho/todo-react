import { useState } from "react"

export function NewTodoForm({onSubmit}){
    
      //Input new item
  const [newItem, setNewItem] = useState("") 

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return 
    
        onSubmit(newItem)
        setNewItem("")
        }

    return (
        <form onSubmit={handleSubmit} className="w-2/4 mx-auto text-center">
    <div className="flex flex-col bg-red-200">
      <label htmlFor="item">New item inside</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} className="bg-red-100" type="text" id="item" />
    </div>
    <button className="bg-blue-100 text-center w-full">Add</button>
    </form>
    )
}
