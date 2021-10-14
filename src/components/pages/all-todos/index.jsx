import "./styles.css";
import { Todo } from "../../todo/index";

export const AllTodosPage = () =>{
    const todos = [
        {text:"feed my cat", date: "10/14/2021", color: "blue", isComplete: true},
        {text:"eat dinner", date: "10/14/2021", color: "peach"}
    ];

    return (
        <div className="todos-container">
            {todos.map ( (todo) => <Todo text={todo.text} date={todo.date} color={todo.color} isComplete={todo.isComplete} />) }
        </div>
    )
}