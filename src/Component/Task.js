import React from 'react'
import './Task.css'

export default function Task() {
  return (
    <div className="task">
      <h1>Inbox</h1>
      <div>
        <span>+</span>
        <span>Add Task</span>
      </div>
      <div>
        <input type="text" className="form-control"/>
        <button className="btn btn-success">Send</button>
        <button className="btn btn-secondary m-2">Cancel</button>
      </div>
    </div>
  )
}
