import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Positions from './components/Positions';
/* import RegisterForm from './components/RegisterForm'; */
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Positions />
      <Team />
      {/* <RegisterForm /> */}
      <Footer />
    </div>
  );
}

export default App;
