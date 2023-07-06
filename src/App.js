import React from "react";
import Home from "./pages/home/Home";
import './pages/home/home.css'
import Sidebar from "./components/sidebar/Sidebar";
import Rightbar from "./components/rightbar/Rightbar";
import Feed from "./components/feed/Feed";



function App() {
  return (
    <>

      <Home />
      <div className="homeContainer">
      <Sidebar />
      <Feed />
      <Rightbar />
      
      </div>
      
      

    </>
  );
}

export default App;
