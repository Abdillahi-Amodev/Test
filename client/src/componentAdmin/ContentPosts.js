import React,{useState} from 'react'
import './ContentPosts.css'

import axios from 'axios'
function ContentPosts() {
    
    const [title,setTitle]=useState('')
    const [description, setDescription]=useState('')
  


const handlePost=async(e)=>{
e.preventDefault();
const formData={
    title:title,
    description:description
}
    



try {
    const resPost = await axios.post('http://localhost:8000/api', formData);
    console.log('data item added > ',resPost.data);
} catch (error) {
    console.log(error);
}

}

    return (
        <div className="contentPosts">
            <div className="post">
                <div className="form-post">
                    <h2>Post A Blog</h2>
                    <form encType='multipart/form-data'>
                        <input type="text" name="title" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                        <textarea name="description" cols="30" rows="10" value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                        
                        <button type='submit' onClick={handlePost}>Send</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ContentPosts
