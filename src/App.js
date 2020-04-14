import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css'
//npm i foundation-sites
function App() {
  return (
    
<form>
  <div class="grid-container">
    <div class="grid-x grid-padding-x">
      <div class="medium-6 cell">
        <label>Input Label
          <input type="text" placeholder=".medium-6.cell"/>
        </label>
      </div>
      <div class="medium-6 cell">
        <label>Input Label
          <input type="text" placeholder=".medium-6.cell"/>
        </label>
      </div>
    </div>
  </div>
</form>
  );
}

export default App;
