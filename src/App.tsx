import React from 'react';


//Component
import NavBar from './frontend/component/navbar'
import Footer from './frontend/component/footer'
import Login from './frontend/pages/login'

//Styling
import './App.css';


function App() {
  return (
    <div className="App">
      <Login />
      {/* <NavBar />
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Twemoji_1f602.svg" className="App-logo" alt="logo" />
        <p>
          I assume this is home page la
        </p>
      </header>
      <Footer /> */}
    </div>
  );
}

export default App;
