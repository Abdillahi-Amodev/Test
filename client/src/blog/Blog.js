import React, {useContext } from 'react'
import './Blog.css'
import EachSingleBlog from './EachSingleBlog';
import { AppContext } from '../context';

function Blog() {

    const { blogList, loading } = useContext(AppContext);
    // const [filter, setFilter] = useState('')
  
    console.log(blogList,loading);
    return (
        <>
        <div className="blog">
            <h2>Hello from server</h2>
           
            <div className="blogList">
                {
                        blogList.length !==0 ?
                           <div>
                         {    blogList.map(blog=>{
                             
                             return <EachSingleBlog {...blog} key={blog._id} />
                        })}
                            </div> : 
                            <div>
                                Loading
                            </div>
                }
            </div>
        </div>
        </>
    )
}

export default Blog
