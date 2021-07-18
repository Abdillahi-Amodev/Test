import React,{useEffect, useState} from 'react'
import './SignUp.css'
import axios from 'axios'
function SignUp() { 
    const [error,setError]=useState('')
    const [isError,setIsError]=useState(false)


useEffect(()=>{
    let time;
if (isError) {
    setTimeout(()=>{
time=setIsError(false)
    },3000)
}

return ()=>{
    clearTimeout(time);
}

},[isError])


    const [signupPost,setSignupPost]=useState({
        username: '',
        email: '',
        password: ''
    })
    const signupChange=(e)=>{
        setSignupPost({...signupPost,[e.target.name]:e.target.value})
    }
    const handleSignupPost=async(e)=>{
e.preventDefault()
        if (signupPost.username !== '' && signupPost.email !== '' && signupPost.password!=='') {
            try {
                let signupresponse = await axios.post('http://localhost:8000/api/signup', signupPost)
                console.log('User Signed Up > ', signupresponse );
            } catch (error) {
                console.log(error);
            }
    
}else{
    console.log('remplir les champs');
       setIsError(true)
            setError('remplir les champs')
}



}

    return (
        <div className="signup">
            <div className="form">
                <div className={`${isError?'error':''}`}>{isError && error}</div>
                <form>
                    <input type="text" name="username" placeholder='Username' value={signupPost.username} onChange={signupChange}/>
                    <input type="email" name="email" placeholder='Email' value={signupPost.email} onChange={signupChange} />
                    <input type="password" name="password" placeholder='password' value={signupPost.password} onChange={signupChange} />
                    <button type='submit' onClick={handleSignupPost}>Sign Up</button>
                </form>
            </div>

        </div>
    )
}

export default SignUp
