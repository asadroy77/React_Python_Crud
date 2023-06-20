import './App.css';
import React from 'react';
import {BrowserRouter as Router ,Routes,Route, Link} from "react-router-dom";
import Login from './components/Login';
import SignUp from './components/SignUp';
import Allusers from "./components/Allusers"
import Box from '@mui/material/Box';
import Home from "./components/Home";
import Subscribe from './components/Subscribe';

import { QueryClient, QueryClientProvider } from 'react-query';

import Meeting from './components/Meeting';

 
 const queryClient = new QueryClient()




function App() {

  React.useEffect(() => {
    console.log("use Effect")
    return () => {
     console.log("clean up function")
    };
  }, []);



 
  return (<>
   <QueryClientProvider client={queryClient}>
  <Router>
    <Box sx={{backgroundColor:"blue"}}> <Link to={"/login"}>Login</Link>
    <Link to={"/signup"}>SignUp</Link> 
    <Link to={"/allusers"}>ALL USers</Link>
    <Link to={"/subscribe"}>Subscribe</Link>
    </Box>
    <Routes>
      <Route path="/" Component={Home}></Route>
      <Route path="/events" Component={Meeting}></Route>
      <Route path="/allusers" Component={Allusers}></Route>
      <Route path='/signup' Component={SignUp}></Route>
      <Route path='/login' Component={Login} ></Route>
      <Route path='/subscribe' Component={Subscribe}></Route>
    </Routes>
  </Router>
  </QueryClientProvider>
    </>
  );
}

export default App;
