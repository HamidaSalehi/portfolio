import React from "react";
import Navbar from "./component/NavBar/navbar";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/Skills";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";
import Footer from "./component/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
