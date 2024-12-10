import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendingSection from './components/TrendingSection';
import ReasonsToJoin from './components/ReasonsToJoin';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TrendingSection />
      <ReasonsToJoin />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;