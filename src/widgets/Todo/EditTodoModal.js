import React, { useState } from 'react'

function EditTodoModal({ modalID, item, description, setDes, tags, tagIds, setTag, setDueDate }) {
  const [oDesc, setODesc] = useState(description);
  const [newTag, setNewTag] = useState(item.tag);
  const [newDueDate, setNewDueDate] = useState(item.date);
  return (
    <div className="modal fade" id={modalID} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
              onClick={
                () => {
                  setODesc(description);
                }}></button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control" value={oDesc} onChange={e => (setODesc(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  item.description = oDesc;
                  setDes(oDesc);
                }
              }} />
            <label htmlFor="tagSelectorEdit">Select Tag</label>
            <select className="form-control"
              name="tagSelectorEdit"
              id="tagSelectorEdit"
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
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"
              onClick={() => {
                setODesc(description);
                setNewTag(item.tag);
                setNewDueDate(item.date);
                setDueDate(item.date);
              }}
            >Close</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal"
              onClick={
                () => {
                  item.description = oDesc;
                  item.tag = newTag;
                  item.date = newDueDate;
                  setDes(oDesc);
                  setNewTag(item.tag);
                  setTag(tags[item.tag]);
                  setDueDate(item.date);
                }}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditTodoModal