import React, { useEffect } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import AboutMe from "./components/about_me";

function App() {
  useEffect(() => {
    document.body.setAttribute('data-theme', 'light'); // replace 'light' with the theme you want to use
  }, []);

  return (
    <div className="App">
      <Navbar />
      <AboutMe />
    </div>
  );
}

export default App;