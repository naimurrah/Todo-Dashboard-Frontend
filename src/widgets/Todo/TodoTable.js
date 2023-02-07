import TodoItem from "./TodoItem";
import {useState, useCallback, useEffect} from "react";
import AddTodoModal from "./AddTodoModal";


function TodoTable() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos();
    }, []);
    
    const getTodos = async () => {
        const prom = await fetch("https://tddbbe.azurewebsites.net/todos");
        const todos = await prom.json();
        console.log("HERE");
        console.log(todos);
        setTodos(todos);
    }

    // FIX TAGS
    // get these from db
    const tags = {
        1:"School",
        2:"Test",
        3:"Exam",
        4:"Homework",
    };

    const tagIds = [1, 2, 3, 4];

    // functions
    // TODO
    const deleteTodo =  useCallback( async (tid) => {
        // have a fetch query too to delete in db
        try {
            const response = await fetch(`https://tddbbe.azurewebsites.net/todos/id=${tid}`, {
                method: "DELETE"
            });
            const deletedTodo = await response.json();
            setTodos(todos.filter(todo => todo._id !== tid));
            return deletedTodo;
        } catch (error) {
            console.error(error.message);
        }

    }, [todos]);

    // TODO
    const submitTodo = (todo) => {
        // TODO Will query and change all submitted todos
        // let addTodo = todo;
        // addTodo.isDone = !addTodo.isDone;
        //todo.isDone = !todo.isDone;
        //console.log(todos);
        //setTodos(prev => todos.filter(item => item.id !== addTodo.id));

        //setTodos(todos => [...todos, addTodo]);
        // todos = [...todos, addTodo];
        console.log(todos);
        console.log("Submitted");

    }

    // TODO
    const editTodo = async (todo) => {
        try {
            console.log("Edited ");
            const response = await fetch(`https://tddbbe.azurewebsites.net/todos/id=${todo._id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });
            const newTodo = await response.json();
            return newTodo;
            
        } catch (error) {
            console.error(error.message);
        }

    }

    // TODO - fix addTodo function and MODALS both edit and add toto
    // TODO implement addTodo function
    const addTodo = async (todo) => {
        // first push to database
        console.log("Added ");
        const response = await fetch(`https://tddbbe.azurewebsites.net/todos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        const newTodo = await response.json();

        // get the id
        // then set todos
        setTodos(todos => [...todos, newTodo]);
    };


    return (
        <div>
            <table className="table">
                <thead>
                    <tr className="table-dark">
                        <th>Todo</th>
                        <th>Description</th>
                        <th>Due Date</th>
                        <th> <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#addTodoModal">Add New Todo</button>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {todos.map((todo) => {
                        return (
                            <TodoItem key={todo._id} item={todo} editTodo={editTodo} submitTodo={submitTodo} deleteTodo={deleteTodo} tags={tags} tagIds={tagIds}></TodoItem>
                        )
                    })}
                </tbody>
            </table>
            <AddTodoModal addTodo={addTodo} tags={tags} tagIds={tagIds}/>
        </div>
    )
}

export default TodoTable;