import React,{useEffect, useState,useContext} from 'react'
import { useParams } from 'react-router-dom'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import axios from 'axios';
import moment from 'moment'
import './SinglePost.css'
import { getLocalStorage } from '../storage'
import {AppContext} from '../context'
import SingleComment from './SingleComment';
function SinglePost() {
    const { id} = useParams();
    const { viewsCount, setViewsCount}=useContext(AppContext)
    const [singleData,setSingleData]=useState({})
    const [openComment,setOpenComment]=useState(false);
    const [Comments,setComments]=useState([]);
    const [countComments,setCountComments]=useState(0)
    const [inputComment,setInputComment]=useState('')
    const [like,setLike]=useState(0)
    const [isReply,setIsReply]=useState(false);
    // const [username,setUsername]=useState('');

    const headers={
        'content-type':'application/json',
        auth: getLocalStorage('login')
    }

// Update views

    useEffect(() => {
        axios.put(`http://localhost:8000/api/${id}`).then((count) => {
        console.log(' views > ',count.data.views);   
            // setViewsCount(count.data.views)
        }).catch(err => console.log(err))

        return () => {

        }

    }, [id])


////////////////////////////////////////////////////////////
  
    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}`, { "headers":headers}).then((single)=>{
    console.log('single data > ',single.data);
    setSingleData(single.data)
            
}).catch(err=>console.log(err))

}, [id])

// get comments

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${id}/comments`, { "headers":headers}).then((comment)=>{
    console.log('comments > ',comment.data);
            setComments(comment.data.commentres)
            setCountComments(comment.data.commentCount)
}).catch(err=>console.log(err))

    },[id])


// input comment
    const changeComment=(e)=>{
        setInputComment(e.target.value)
    }
    const handleComment=async(e)=>{
e.preventDefault();
try {
    let inputPost = await axios.post(`http://localhost:8000/api/comments/${id}`, { comment: inputComment }, { "headers": headers });
    console.log('comment input > ', inputPost.data);
    setComments([...Comments, inputPost.data])
    // setUsername(inputPost.data.comment.ownerComment.username)
    console.log(inputPost.data.comment.ownerComment.username);
    setInputComment('');
} catch (error) {
    console.log(error);
}

}
// handle like 

    const handleLike = async(id)=>{
      try {
          const like = await axios.put(`http://localhost:8000/${id}/like`, { "headers": headers })
                console.log(like);
      } catch (error) {
          console.log(error);
      }
    }

    // Reply comment
    useEffect(()=>{


    })

 

    return (<>
        <div className="singlePost">
            <h1>Single Post</h1>
            <div className="single-data">
                <p className='title'>{singleData.title}</p>
                <div className="time">{moment(singleData.createdAt).fromNow()}</div>
                <p>{singleData.description}</p>
                <div className="flex">
                   
                    <div className="like" > <AiFillLike onClick={() => handleLike(singleData._id)} /></div>
                    <div className="dislike"><AiFillDislike  /></div>
                    <div className="views"> <span>{singleData.views}</span> views</div>
                    <div className="comment" onClick={() => setOpenComment(!openComment)}><span>{countComments}</span> comments</div>
                </div>
            </div>
            {
            openComment && <div className="comment-list" >
                {
                    Comments.map(comment=>{
                       
                        return <SingleComment {...comment} key={comment._id}
                         inputComment={inputComment} changeComment={changeComment}
                          
                         />

                       })
                }
                
            
            

                <div className="input-comment">
                        <form onSubmit={handleComment}>
                            <input type="text" name="comment"  placeholder='Comment....' value={inputComment} onChange={changeComment}/>
                        
                   </form>
                  
                </div>
            </div>

            }
           
           
            
        
        </div>
    </>
    )
}

export default SinglePost
