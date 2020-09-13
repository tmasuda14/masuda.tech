import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";
import DisplayCarousel from "./components/DisplayCarousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Header />
      <DescriptionCard />
      <DisplayCarousel />
      <Footer />
    </div>
  );
}

export default App;
