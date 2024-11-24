import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Modules from "./Modules";
import Footer from "./Footer";
import ImageSlider from "./ImageSlider";

const Home = () => {
    return (
      <div className="App">
        <Header />
        <main>
          <section id="hero">
            <ImageSlider />
          </section>
        </main>
        <Hero />
        <Modules />
        <Footer />
      </div>
    );
  };
  
  export default Home;