import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Blog from './blog/Blog'
import SinglePost from './blog/SinglePost';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
function App() {
  return ( <>
    <Router>
      <Switch>
        <Route exact path='/'>
             <Blog/>
        </Route>
        <Route exact path='/:id'>
             <SinglePost/>
        </Route>
        <Route exact path='/admin/dashboard'>
             <Dashboard/>
        </Route>
        <Route exact path='/admin/posts'>
             <Posts/>
        </Route>
        <Route exact path='/admin/users'>
             <Users/>
        </Route>
        <Route exact path='/admin/signup'>
             <Admin/>
        </Route>
        <Route exact path='/user/signup'>
             <SignUp/>
        </Route>
        <Route exact path='/user/login'>
         <Login/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
