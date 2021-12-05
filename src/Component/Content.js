import React, { useState} from 'react'
import Sidebar from './Sidebar'
import Task from './Task'
import './Content.css'

export default function Content() {
  const [selectTab, setSelectTab] = useState("INDEX");
  return (
    <div className="content">
      <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}/>
      <Task/>
    </div>
  )
}
