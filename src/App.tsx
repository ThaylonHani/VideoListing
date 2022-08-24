import * as React from 'react';

import "./assets/styles/global.css";
import "./assets/styles/app.css";
import "./assets/styles/videos.css";


import { Videos } from './components/Videos';
import { discovery_v1 } from 'googleapis';
import { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState("");

  
  return (
    <div className="App">
      <header>
      <h1>
       Videos<strong>Listing</strong>
      </h1>
      </header>
      <main >
            <h2>pesquise o canal em que quer listar os vídeos:</h2>
            <input maxLength= {30} type="text" value ={inputValue}  onChange={e => setInputValue(e.target.value)}/>
            <h2>Videos:</h2>
      <div>
        <div className="video_list">  
      <Videos/>
        </div>
      </div>
      </main>
    </div>
  )
}

export default App
