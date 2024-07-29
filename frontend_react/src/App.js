import React from 'react';

import { Blogs, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <Skills />
    <Work />
    <Blogs />
    <Footer />
  </div>
);

export default App; 