import mongoose from 'mongoose'
import { Blog, Signup, Comment } from '../model/postSchema.js'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


// get all blogs
const getBlog=async(req,res)=>{
    try {
        const getres=await Blog.find();
        res.send(getres)
    } catch (error) {
        console.log(error)
    }
    
}
// post the blogs
const postBlog=async(req,res)=>{
    const blog =new Blog({
        title:req.body.title,
        description:req.body.description,
    });
    try {
        const postres =await blog.save();
        res.send(postres)
    } catch (error) {
        console.log(error);
    }
}
// find single blog by Id
const singlePostBlog=async(req,res)=>{
    try {
        const singlePostres =await Blog.findById(req.params.id)
        res.send(singlePostres)
    } catch (error) {
        console.log(error);
    }
}


// user Sign UP

const userSignUp=async(req,res)=>{

try {
           let hashpwd = await bcrypt.hash(req.body.password,10);
            let signup = new Signup({
                username:req.body.username,
                email: req.body.email,
                password: hashpwd,
            });
            const signupres = await signup.save();
            res.send(signupres)

      
    }catch (error) {
        console.log(error);
    }
}

// find single user by email

const userLogin=async(req,res)=>{
    try {
          let user=await Signup.findOne({email:req.body.email})
          if (!user) return res.status(400).json({msg:'There is no user'}) 

          let match=await bcrypt.compare(req.body.password,user.password)

          if (!match)  return res.status(400).json({ msg: 'The password is not match' })

          let token=jwt.sign({id:user._id},'mysecretkey')

         res.send({user,token})
         
    }catch (error) {
        return res.status(400).json({msg:error});
    }
}

// post a comment
const commentPost = async (req, res) => {
             const newComment=new Comment( {
                     comment:req.body.comment,
                     ownerComment:req.decoded.id,
                     blogOwner:req.params.id
                    }
             );

      try {
          const CommentPost = await newComment.save();
          res.send(CommentPost);
    } catch (error) {
       res.send(error)
    }

}

const getComment = async (req, res) => {
    try {
        const commentres = await Comment.find({ blogOwner:req.params.id}).populate('ownerComment');
        const commentCount = await Comment.find({ blogOwner:req.params.id}).count();
      
    
        // console.log('show > ',commentres,);
    res.send({commentres, commentCount})
      
    } catch (error) {
        console.log(error)
        res.send(error)
    }

}

//likes and dislikes

const putLike=async(req,res)=>{
try {
       const blog =await Blog.findById(req.params.id);
    if (!blog.likes.includes(req.decoded.id)) {
        await blog.updateOne({ $push: { likes: req.decoded.id } })
        res.status(200).json('user has been liked')
    }else{
        await blog.updateOne({$pull:{likes:req.decoded.id} })
        res.status(200).json('user has been disliked')

       }
} catch (err) {
    res.status(500).json(err)
}
}

const singlePostBlogPut=async(req,res)=>{
try {
   const viewsUpdate=await Blog.findByIdAndUpdate(req.params.id,{
       $inc: { views:1}
   })
    res.status(200).send(viewsUpdate)
} catch (err) {
    res.status(500).json(err)
}
}
   
export { getBlog, postBlog, singlePostBlog, userSignUp, userLogin, commentPost, getComment, putLike, singlePostBlogPut}