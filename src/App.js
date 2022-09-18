import Header from './components/Header/Header.js'
import Navbar from './components/Navbar/Navbar.js'
import './App.css';
import Result from './components/Result/Result.js';
import { useState } from 'react';
import request from './Helper/Request'

const Apps = () => {
  const [selectedoption ,setSelectedoption] = useState (request.fetchTrending);
  return(
    <div className = "app">
      {/* Header */}
      <Header/>
      {/* Navbar */}
      <Navbar setSelectedoption={setSelectedoption} />
      {/* Content */}
      <Result selectedoption={selectedoption}/>
    </div>
  )
}
export default Apps;