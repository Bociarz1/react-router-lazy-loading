import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
const LazyUsers = React.lazy(()=>import('./components/Users'))
function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route 
          path="users" 
          element={
            <React.Suspense fallback='...Loading Component'>
              <LazyUsers/>
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
