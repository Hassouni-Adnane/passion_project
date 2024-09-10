import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Insert from './components/Insert';
import PopupMenuComponent from './components/PopupMenuComponent';
import { ShowData } from './components/pages/ShowData';
import { UpdateData } from './components/pages/UpdateData';
import { DeleteData } from './components/pages/DeleteData';
import { ShowUserById } from './components/pages/ShowUserById';
import TestMain from './test/TestMain';
import Glasses from './test/Glasses';



function App() {
  return (
    <Router>
        
        <NavBar />
        
        <Routes>
        <Route path="/" element={<TestMain />} />
          <Route path="/insert" element={<Insert />} />
          <Route path="/update" element={<UpdateData />} />
          <Route path="/users" element={<TestMain />} />
          <Route path="/glasses" element={<Glasses />} />


        </Routes>
        
    </Router>
  );
}

export default App;
