import React, {useState} from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DescriptionCard from "./components/DescriptionCard";
import DisplayCarousel from "./components/DisplayCarousel";
import Footer from "./components/Footer";

const App = () => {

  const [professional, setProfessional] = useState(true);
 
  const handleClick = (event) => {
      setProfessional(!professional);
  }

  return (
    <div>
      <NavBar changeMood={handleClick}
              styleTypeProfessional={professional}/>
      <Header styleTypeProfessional={professional}/>
      <DescriptionCard styleTypeProfessional={professional}/>
      <DisplayCarousel styleTypeProfessional={professional}/>
      <Footer styleTypeProfessional={professional}/>
    </div>
  )
}


export default App;
