import React, {useState} from 'react';

export const TodosContext = React.createContext(
    {
        todos: [],
        addTodo: () => {},
        deleteTodo: () => {},
        updateTodo: () => {}
    }
);

export const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        let oldTodos = todos;
        oldTodos.push(todo);
        setTodos(oldTodos);
    }

    const updateTodo = (todoId, isComplete) => {
        let oldTodos = todos;
        const todoIndex = todos.findIndex(
            (todo) => {
                return(todo.id === todoId)
            }
        );

        if (todoIndex !== -1){
            oldTodos[todoIndex].isComplete = isComplete;
            setTodos(oldTodos);
        }
    }

    const deleteTodo = (todoId) => {
        let oldTodos = todos;
        const todoIndex = todos.findIndex(
            (todo) => {
                return(todo.id === todoId)
            }
        );

        if (todoIndex !== -1){
            oldTodos.splice(todoIndex, 1);
            setTodos([...oldTodos])
        }
    }

    return(
        <TodosContext.Provider value={{todos: todos, addTodo: addTodo, updateTodo: updateTodo, deleteTodo: deleteTodo}}>
            {props.children}
        </TodosContext.Provider>
    )
}