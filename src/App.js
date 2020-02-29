import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


class App extends Component {
  render() {
   
    
      return (
        <>
        <Navbar />
        <Home />
    
        <Footer />
        </>
      );
    }
  }

  export default App;
