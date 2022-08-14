import * as React from 'react';
import "./assets/styles/global.css";


import "./assets/styles/app.css"

function App() {

  return (
    <div className="App">
      <header>
      <h1>
       Videos<strong>Listing</strong>
      </h1>
      </header>
      <main className="flex bg-slate-100 my-5">
            <h2>pesquise o canal em que quer listar os vídeos:</h2>
            <input maxLength= {30} type="text" className=" bg-slate-100 rounded-lg"/>
      </main>
    </div>
  )
}

export default App
