import React from 'react'
import ContentPosts from '../componentAdmin/ContentPosts'
import Header from '../componentAdmin/Header'
import SideBar from '../componentAdmin/SideBar'
import './Posts.css'
function Posts() {
    return (<>
         <Header />
        <div className="posts">
            <SideBar />
            <ContentPosts/>
        </div>

    </>
    )
}

export default Posts
