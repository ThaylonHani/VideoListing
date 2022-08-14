import { useState } from 'react'
import reactLogo from './assets/react.svg'



function App() {

  return (
    <div >
      <header  className="bg-gray-800 text-red-900 p-8">
      <h1 className="my-5 text-center text-3xl bg-transparent" >
       Videos<strong id="strongHeader" className="text-zinc-900 bg-transparent">Listing</strong>
      </h1>
      </header>
      <main className="flex bg-slate-900 text-lime-300 my-5">
            <h2 className="">pesquise o canal em que quer listar o vídeo:</h2>
            <input type="text" className="bg-slate-100 rounded-lg"/>
      </main>
    </div>
  )
}

export default App
