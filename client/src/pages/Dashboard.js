import React from 'react'
import Content from '../componentAdmin/Content'
import Header from '../componentAdmin/Header'
import SideBar from '../componentAdmin/SideBar'
import './Dashboard.css'
function Dashboard() {
    return (<>
    
        <Header />
        <div className="dashboard">
        <SideBar/>
        <Content/>
        </div>
    
    </>
    )
}

export default Dashboard
