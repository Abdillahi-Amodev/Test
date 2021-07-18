import React from 'react'
import { sideList } from '../sideBarList'
import { Link } from 'react-router-dom'
import './SideBar.css'

// import { AiOutlineDashboard } from 'react-icons/ai'
function SideBar() {
    return (
        <>
        <div className="sidebar">
             {
                 sideList.map(side=>{
                     return <ul key={side.id} className='sidebarlist'>
                        
                         <li>
                             {side.icon}
                            <Link to={side.url}>{side.url}</Link>
                         </li>
                     </ul>
                 })
             }
        </div>


        </>
    )
}

export default SideBar
