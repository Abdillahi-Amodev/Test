import { AiOutlineDashboard } from 'react-icons/ai'
import { HiOutlineUserAdd } from 'react-icons/hi'
import { BsFilePost } from 'react-icons/bs'
export const sideList=[
    { 
        id:1,
        url:'dashboard',
        icon: <AiOutlineDashboard className='dashboard'/>
    },
    
    {
        id:2,
        url:'posts',
        icon: <BsFilePost className='posts'/>
    },
    
    {
        id: 3,
        url:'users',
        icon: <HiOutlineUserAdd className='users'/>
    },
 
]