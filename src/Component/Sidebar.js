import React from 'react'
import './Sidebar.css'


const  Sidebar=({selectTab,setSelectTab})=> {
  return (
    <div className="side-bar">
      <div className={selectTab==='INDEX' ? "active" : ""} onClick={()=>setSelectTab("INDEX")}><i className="fas fa-inbox"></i>Inbox</div>
      <div className={selectTab==='TODAY' ? "active" : ""} onClick={()=>setSelectTab("TODAY")}><i className="far fa-calendar-alt"></i>Today</div>
      <div className={selectTab==='NEXT' ? "active": ""} onClick={()=>setSelectTab("NEXT")}><i className="far fa-calendar"></i>Next 7 Days</div>
    </div>
  )
}

export default Sidebar;
