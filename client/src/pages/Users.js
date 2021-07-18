import React from 'react'

import ContentUsers from '../componentAdmin/ContentUsers'
import Header from '../componentAdmin/Header'
import SideBar from '../componentAdmin/SideBar'
import './Posts.css'
function Users() {
    return (<>
        <Header />
        <div className="users">
            <SideBar />
            <ContentUsers/>
        </div>

    </>
    )
}

export default Users
