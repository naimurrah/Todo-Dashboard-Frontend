import TodoItem from "./TodoItem";
import {useState, useCallback} from "react";
import AddTodoModal from "./AddTodoModal";


function TodoTable() {
    const [todos, setTodos] = useState([
        {
            id:1,
            description:"Calc Homework",
            tag:1,
            hasDue:false,
            date: "",
            isDone: true,
        },
        {
            id:2,
            description:"Spanish Homework",
            tag:3,
            hasDue:true,
            date: "2022-10-10",
            isDone: false,
        },
        {
            id:3,
            description:"Wash Laundry",
            tag:2,
            hasDue:true,
            date: "2022-10-10",
            isDone: false,
        },
        {
            id:4,
            description:"Sleep",
            tag:2,
            hasDue:false,
            date: "",
            isDone: false,
        },
    ]);

    // remove this once backend is implemented
    const [currentId, setId] = useState(5)

    // get these from db
    const tags = {
        1:"School",
        2:"Test",
        3:"Exam",
        4:"Homework",
    };

    const tagIds = [1, 2, 3, 4];

    // functions
    const deleteTodo = useCallback((tid) => {
        // have a fetch query too to delete in db
       setTodos(todos.filter(todo => todo.id !== tid));
    }, [todos]);

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

    const editTodo = (todo) => {
        console.log("Edited ");
    }

    // TODO implement addTodo function
    const addTodo = (todo) => {
        setTodos(todos => [...todos, todo]);
        console.log("current id: " + currentId);
        setId(currentId + 1);
        console.log("current id: " + currentId);
        console.log("Added new item");
    };
    // have a useEffect function to load todos


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
                            <TodoItem key={todo.id} item={todo} editTodo={editTodo} submitTodo={submitTodo} deleteTodo={deleteTodo} tags={tags} tagIds={tagIds}></TodoItem>
                        )
                    })}
                </tbody>
            </table>
            <AddTodoModal addTodo={addTodo} idNum={currentId} tags={tags} tagIds={tagIds}/>
        </div>
    )
}

export default TodoTable;