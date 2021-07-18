import React,{useState,useEffect} from 'react'
import axios from 'axios'


const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [blogList,setBlogList]=useState([])
    const [loading,setLoading]=useState(false)
    const [viewsCount, setViewsCount] = useState(null);
 
    
useEffect(()=>{
axios.get('http://localhost:8000/api').then((res)=>{
    setLoading(true)
      setBlogList(res.data)
}).catch(err=>console.log(err))


}, [])

    return <AppContext.Provider value={{ blogList, loading, viewsCount, setViewsCount}}>
        {children}
        </AppContext.Provider>
}

export { AppContext, AppProvider}
