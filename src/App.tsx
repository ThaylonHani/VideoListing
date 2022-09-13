import * as React from "react";

import "./assets/styles/global.css";
import "./assets/styles/app.css";
import "./assets/styles/videos.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Videos } from "./components/Videos";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [videos, setVideos] = useState([
    {
      thumb: "",
      title: "",
      href: "",
    },
  ]);

  const httpApiYoutube = "https://www.googleapis.com/youtube/v3/search";
  const keyApiYoutube = "AIzaSyAYnelLuOksmQMk1xRkI11Ya0KpErA-iGo";
  const keyReserveApiYoutube = "AIzaSyBs3iQ2yzZr_mr1vFb_cxYfmeoQ7ZAnHuw";

  const channelId = "UC6cALLZLWQGilBFBB0PWAog";

  const total = 3;

  function handleInputValue() {
    setInputValue(document.querySelector("input").value);
  }

  useEffect(() => {
    axios
      .get(
        `${httpApiYoutube}?part=id%2Csnippet&channelId=${inputValue}&key=${keyReserveApiYoutube}&maxResults=${total}&type=video&order=date`
      )
      .then((response) => {
        const items = response.data.items;
        setVideos(items);
      });
  }, [inputValue]);

  return (
    <div className="App">
      <header>
        <h1>
          Videos<strong>Listing</strong>
        </h1>
      </header>
      <main>
        {inputValue == "" ? (
          <h2>Pesquise o canal em que quer listar os vídeos:</h2>
        ) : (
          ""
        )}
        <input
          maxLength={30}
          type="text"
          aria-label="Id no canal"
          placeholder="ID do canal"
        />
        <button onClick={() => handleInputValue()}>Pesquisar</button>
        <div>
          <div className="video_list">
            {inputValue == "" || null || undefined ? (
              ""
            ) : (
              <>
                <h2>Videos:</h2>
                <Videos videos={videos}/>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
