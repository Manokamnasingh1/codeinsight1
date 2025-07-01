// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services';
import RequestForm from './Components/RequestForm';
import Footer from './Components/Footer';
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <RequestForm />
      <Footer />
    </div>
  );
}

export default App;
