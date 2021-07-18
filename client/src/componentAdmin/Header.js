import React,{useState} from 'react'
import './Header.css'
import { IoMdArrowDropdown } from 'react-icons/io'
import {lists} from '../lists'
function Header() {
    const [open,setOpen]=useState(false)
    return (<>
        <div className="header">
             <div className='logo'>
                Amodev 
             </div>
             <div className="Signout">
                <IoMdArrowDropdown className='dropdown' onClick={()=>setOpen(!open)}/>
             </div>
        </div>
        {
            open && <div className="popup">
                            {
                                lists.map(list=>{
                                    return <div className='list'>
                                        {list.text}
                                    </div>
                                })
 

                            }
                        </div>
        
        }
    </>
    )
}

export default Header
