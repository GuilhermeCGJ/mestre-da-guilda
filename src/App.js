import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DataProvider from './context/DataProvider';
import './App.css';
import Start from './pages/Start';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route exact path="/" element={ <Start /> } />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
