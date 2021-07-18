import React,{useState} from 'react'
import moment from 'moment'
import './SingleComment.css'
function SingleComment({ _id,ownerComment, comment, createdAt, inputComment, changeComment, }) {
    const [isReply, setIsReply] = useState(false);
    return (
        <div className="display" >
            {/* <div className='image'></div> */}
            <div className='dispaly-comment'>
                <p><span>{ownerComment.username}</span>{comment}</p>

                <div className="repondre">
                    <span className='reply' onClick={() =>{ 
                         
                      setIsReply(!isReply)
                        
                        }} >reply</span>

                    <span className='temps'>{moment(createdAt).fromNow(true)}</span><br />
                </div>
                <div className='recievedReply'>
                    coucou
                </div>
                {
                    isReply && <form className='ReplyComment'>
                        <input type="text" name="reply" placeholder={`Reply to ${ownerComment.username} comment`} value={inputComment} onChange={changeComment} />

                    </form>
                }
            </div>
        </div>
               
                  
    )
}

export default SingleComment
