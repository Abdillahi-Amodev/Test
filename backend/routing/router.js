import express from 'express'
import { getBlog, postBlog, singlePostBlog, userSignUp, userLogin, getComment, commentPost, putLike, singlePostBlogPut} from '../controller/blog.js'
import verified from '../controller/auth.js'

const router=express.Router();




router.get('/',getBlog)
router.post('/',postBlog)
router.post('/signup', userSignUp)
router.post('/login', userLogin)
router.post('/comments/:id', verified,commentPost)


router.get('/:id/comments',getComment) ///// comments
router.put('/:id/like',verified,putLike)
router.get('/:id', singlePostBlog)
router.put('/:id', singlePostBlogPut)







export {router}