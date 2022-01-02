import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavMenu from './components/NavMenu';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
      </Router>
    </>
  );
}
