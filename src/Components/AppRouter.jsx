import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
