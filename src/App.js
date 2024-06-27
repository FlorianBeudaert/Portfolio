import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light'); // replace 'light' with the theme you want to use
  }, []);

  return (
    <div className="App">
        <Navbar />
        <Home />
    </div>
  );
}

export default App;