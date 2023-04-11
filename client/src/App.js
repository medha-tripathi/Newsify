import React from "react";
import Login from "./pages/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/SignUp/Signup";
import Detail from "./pages/Detail/Detail";
import Error from "./pages/Error/Error";
import Team from "./pages/Team/Team";
import Homemain from "./pages/HomePage/Homemain";
import SavedNews from "./pages/SavedNews/Savednews";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homemain/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/team" element={<Team />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/savednews" element={<SavedNews/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
