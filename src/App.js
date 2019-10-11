import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>freddy</h1>
      </header>

      <main className="row">
        <Sidebar></Sidebar>

        <div className="col-10 router-outlet">
          <div className="search-box">
            <input type="text" className="form-control-plaintext" placeholder="search..." />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
