import { useState } from "react";
import EditTodoModal from "./EditTodoModal";
function TodoItem({ item, tags, tagIds, deleteTodo, submitTodo}) {
    // implement state functions later on
    const [done, setDone] = useState(item.isDone);
    // maybe pass tags as prop
    const [description, setDes] = useState(item.description);
    const [tag, setTag] = useState(item.tag);
    const [dueDate, setDueDate] = useState(item.date);
    const modalID = "eMod"+item.id;


    // TODO Fix the DONE, EDIT, and DELETE BUTTONS

    // use callback for delete/add/mark as done
    return (
        <>
            <tr key={item._id} className={done ? "table-success" : ""}>
                <td><button type="button" className="btn btn-primary" onClick={
                    () => {
                        submitTodo(item);
                        item.isDone = !item.isDone;
                        setDone(prev => !prev);
                    }}>
                    Done</button></td>
                <td>
                    <p>{description}</p>
                    <div className="badge rounded-1 text-bg-info">{tag}</div>
                </td>
                <td>{dueDate}</td>
                <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={"#" +modalID }onClick={() => { console.log("IMPLEMENT EDIT BUTTON") }}>Edit</button>
                <EditTodoModal modalID={modalID} item={item} description={description} setDes={setDes} tags={tags} tagIds={tagIds} tag={tag} setTag={setTag} setDueDate={setDueDate} />
                </td>
                <td><button type="button" className="btn btn-danger" onClick={() => { deleteTodo(item.id) }}>Delete</button></td>
                
            </tr>
        </>
    )
}

export default TodoItem;