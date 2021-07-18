import mongoose from 'mongoose'

let postSchema=new mongoose.Schema({
title:String,
description:String,
likes:{
    type:Array,
    default:[]
},  
views:{
    type:Number,
    default:0
},


},{timestamps:true});

let signupSchema=new mongoose.Schema({
username:{
    type:String,
    required:true,
    
    trim:true,
    lowerCase:true
},
email:{
    type:String,
    required:true,
   
    trim:true,
    lowerCase:true
},
password:{
    type:String,
    required:true,
    
    trim:true,
   
}


},{timestamps:true});

let commentSchema=new mongoose.Schema({
comment:{
    type:String,
},
ownerComment:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Signup'
},
    blogOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog'
    },
},{timestamps:true});


const Signup = mongoose.model("Signup", signupSchema);
const Blog = mongoose.model("Blog", postSchema);
const Comment = mongoose.model("Comment", commentSchema);



export { Blog, Signup, Comment};