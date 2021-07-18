import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { setLocalStorage } from '../storage'
function Login() {
   const history = useHistory()
    const [loginError,setLoginError]=useState("")
    const [isLoginError,setIsLoginError]=useState(false)
    const [loginPost,setLoginPost]=useState({
        email:'',
        password:''
    })
    useEffect(()=>{
        let time;
        if (isLoginError) {
            time=setTimeout(()=>{
               setIsLoginError(false)
            },3000)
        }
        return ()=>{
            clearTimeout(time)
        }

    }, [isLoginError])

    const changeLoginPost=(e)=>{
        setLoginPost({...loginPost,[e.target.name]:e.target.value})
    }

    const handleloginPost=async(e)=>{
e.preventDefault();
        if (loginPost.email !== '' && loginPost.password!=='') {
    try {
        let loginResponse = await axios.post('http://localhost:8000/api/login', loginPost)
        console.log('login > ',loginResponse.data);
        setLocalStorage('login', loginResponse.data.token)
        setLoginPost({ email: '', password: ''})
        history.push('/')
    } catch (errors) {
        console.log(errors);
    }
    
}else{
setIsLoginError(true)
setLoginError('Remplir les champs')
}
}

    return (
        <div className="login">
            <div className="form">
                <div className={`${isLoginError ? 'error' : ''}`}>{isLoginError && loginError}</div>
                <form>
                    <input type="email" name="email" placeholder='Email' value={loginPost.email} onChange={changeLoginPost} />
                    <input type="password" name="password" placeholder='password' value={loginPost.password} onChange={changeLoginPost}/>
                    <button type='submit' onClick={handleloginPost}>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login
