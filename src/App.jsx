import React from 'react';
import './App.css';
import AppRouter from './Components/AppRouter';
import AppNavBar from './Components/AppNavBar';

export default function App() {
  return (
    <div className="App">
      <AppNavBar />

      <AppRouter />
    </div>
  );
}
