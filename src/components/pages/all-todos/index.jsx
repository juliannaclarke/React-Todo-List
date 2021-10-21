import "./styles.css";
import { Todo } from "../../todo/index";
import { useContext, useEffect, useState } from "react";
import {TodosContext} from "../../../context/todos-context.js";
export const AllTodosPage = () =>{
    
    const [todoElements, setTodoElements] = useState([]);
    const todoContext = useContext(TodosContext);

    useEffect (()=>{
        const todoElems = todoContext.todos.map((todo) =>{
            return(
                <Todo key={todo.id} text={todo.title} date={todo.date} isComplete={todo.isComplete} todoId={todo.id}></Todo>
            )
        })
        setTodoElements(todoElems);
    }, [todoContext.todos])

    return (
        <div className="todos-container">
            {todoElements}
        </div>
    )
}