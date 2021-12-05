import React, { useState} from 'react'
import Sidebar from './Sidebar'
import Task from './Task'

export default function Content() {
  const [selectTab, setSelectTab] = useState("INDEX");
  return (
    <div>
      <Sidebar selectTab={selectTab} setSelectTab={setSelectTab}/>
      <Task/>
    </div>
  )
}
