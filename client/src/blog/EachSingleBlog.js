import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom';
// import { AiFillLike, AiFillDislike } from 'react-icons/ai'
// import { AppContext } from '../context';

function EachSingleBlog({ _id, title, description, blogImage,views }) {
    // const {  viewsCount } = useContext(AppContext);
   
    // show(_id);

    return (
        <div className='listBlog' >


            <p className='title'>{title}</p>
            <p className='description'>{description}</p>


            <div className="details">
                <span>{views} views</span>
                <div className="comment-blog"><Link to={`/${_id}`}>Read More</Link></div>

            </div>

        </div>
    )
}

export default EachSingleBlog
