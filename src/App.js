import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Component from './Component';
import Component2 from './Component2';
import Component3 from './Component3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Component/>}/>
        <Route path="/contacts" element={<Component2/>}/>
        <Route path="/register" element={<Component3/>}/>
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
