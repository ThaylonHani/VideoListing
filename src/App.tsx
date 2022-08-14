import { useState } from 'react'
import reactLogo from './assets/react.svg'

import "./assets/styles/global.css"


function App() {

  return (
    <div >
      <header  className="bg-gray-800 text-red-900 p-8">
      <h1 className="my-5 text-center text-3xl bg-transparent" >
       Videos<strong id="strongHeader" className="text-zinc-900 bg-transparent">Listing</strong>
      </h1>
      </header>
      <main>
            <h2>pesquise o canal em que quer listar o vídeo:</h2>
            <input type="text"/>
      </main>
    </div>
  )
}

export default App
