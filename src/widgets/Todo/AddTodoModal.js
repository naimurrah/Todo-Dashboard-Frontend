import React, { useState } from 'react'

export default function AddTodoModal({ addTodo, idNum, tags, tagIds }) {
    const [newDesc, setNewDesc] = useState("");
    const [newTag, setNewTag] = useState(0);
    const [newDueDate, setNewDueDate] = useState("");
    let newTD = {
        id: idNum,
        description: "New Todo",
        tag: 3,
        hasDue: false,
        date: "",
        isDone: false,
    };

    // make a clean up on close function
    return (
        <div className="modal fade" id="addTodoModal" tabIndex="-1" aria-labelledby="addTodoModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addTodoModalLabel">Create New Todo</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text" className='form-control' value={newDesc} placeholder="Enter Todo Description"
                            onChange={(e) => setNewDesc(e.target.value)}
                        />
                        <label htmlFor="tagSelector">Select Tag</label>
                        <select className="form-control"
                            name="tagSelector"
                            id="tagSelector"
                            value={newTag}
                            onChange={(e) => {
                                setNewTag(e.target.value);
                            }}
                        >
                            <option value={0} disabled>Choose here</option>
                            {tagIds.map((tag) => {
                                return (
                                    <option key={tag} value={tag}>{tags[tag]}</option>
                                )
                            })}
                        </select>
                        <input className='form-control' id="date" type="date" value={newDueDate} onChange={(e) => {setNewDueDate(e.target.value)}}/>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => {
                                setNewDesc("");
                                setNewTag(0);
                                setNewDueDate("");
                            }}
                        >Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
                            onClick={() => {
                                newTD.description = newDesc;
                                newTD.tag = newTag;
                                newTD.date = newDueDate;
                                addTodo(newTD);
                                setNewDesc("");
                                setNewTag(0);
                                setNewDueDate("");
                            }}
                        >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
