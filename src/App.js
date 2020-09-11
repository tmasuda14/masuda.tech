import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import PageDescription from "./components/PageDescription";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <PageDescription />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
