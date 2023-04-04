import React from "react";
import Login from "./pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./pages/SignUp/Signup";
import Detail from "./pages/Detail/Detail";
import Error from "./pages/Error/Error";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path='/login' element={<Login />} /> 
    <Route path='/signup' element={<Signup />} />
    <Route path='/team' element={<Team />} />
    <Route path='/detail' element={<Detail />} /> 
    {/* <Route path='/category' element={<Category />} /> */}
    {/* <Route path='/*' element={<Error />} /> */}
    {/* <Route path='/' element={<Home />} /> */}
    </Routes>
    </Router>
      {/* <Login/> */}
      {/* <Background/> */}
      <Detail/>
      {/* <Signup/> */}
      {/* <Error/> */}
      {/* <Team/> */}
    </>
  );
}

export default App;
