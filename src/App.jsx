import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TickerBand from './components/TickerBand';
import FeaturesSection from './components/FeaturesSection';
import ComparisonTable from './components/ComparisonTable';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TickerBand />
        <FeaturesSection />
        <ComparisonTable />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
