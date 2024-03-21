import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
// import Home from './pages/Home';
import Create from './components/Create';
import Update from './components/Update';
import Select from './components/Select';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/create' element={<Create/>}></Route>
            <Route path='/update' element={<Update/>}></Route>
            <Route path='/select' element={<Select/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
