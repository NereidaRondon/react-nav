import React from 'react';
import AppRouter from './Components/AppRouter';
import AppNavBar from './Components/AppNavBar';
import Socials from './Components/Socials';

export default function App() {
  return (
    <div>
      <AppNavBar />
      <AppRouter />
      <Socials />
    </div>
  );
}
