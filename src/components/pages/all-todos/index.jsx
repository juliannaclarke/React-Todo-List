import "./styles.css";
import { Todo } from "../../todo/index";

export const AllTodosPage = () =>{
    return (
        <div>
            <Todo
                text="walk my cat" 
                date="10/10/2021" 
                color="blue"
            />
            <Todo
                text="walk my cat" 
                date="10/10/2021" 
                color="blue"
            />
        </div>
    )
}