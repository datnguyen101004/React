import { useState } from "react"

const MyComponent = () =>{
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        setListTodo([...listTodo, { id: Math.floor((Math.random()*10000)+1), value: newTodo}])
    }

    const [listTodo, setListTodo] = useState([])

    const handleChangeInput = (data) =>{
        setNewTodo(data.target.value)
    }

    const handleDeleteTodo = (todoId)=>{
        let newFilter = listTodo.filter(item => item.id !== todoId)
        setListTodo(newFilter)
    }

    return (
        <div>
            <div>Todo List</div>
            <input type={"text"} onChange={(data) => handleChangeInput(data)}/>
            <button onClick={() => handleAddTodo()}>Add</button>
            <br/>
            {
                listTodo.map((todo, index) => {
                    return (
                        <div>
                            <div>
                                {index +1}.{todo.value}
                                <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
                            </div>                
                        </div>
                    )
                }
                )
            }
        </div>
    )
}

export default MyComponent;