import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExampleComponent from './components/Example';
import Layout from './components/Layout';
import Home from './components/Home/Home';
import OtherPage from './components/OtherPage';
import './App.css'

function App() {
  return (
    <div>
      <ExampleComponent />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<OtherPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
