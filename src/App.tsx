import "./assets/styles/global.css";
import "./assets/styles/app.css";
import "./assets/styles/videos.css";
import search from "./assets/images/search.svg";

import { useFetch } from "./service/useFetch";

import { Videos } from "./components/Videos";
import { useEffect, useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState<string | undefined>("");
  

  
  const API_KEY = "YOUR_API_KEY";
  
  


  const { videos } = useFetch(
    `https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=${inputValue}&key=${API_KEY}&maxResults=${25}&type=video&order=date`,
    inputValue
    );
 
    
    function handleInputValue() {
    setInputValue(document.querySelector("input")?.value);
    setTimeout((document.querySelector("input").value = ""), 100);
  }

  return (
    <div className="App">
      <header>
        <h1>
          Videos<strong>Listing</strong>
        </h1>
      </header>
      <main>
        {inputValue == "" ? (
          <div>
            <h4>Pesquise o canal em que quer listar os vídeos:</h4>
          </div>
        ) : (
          ""
        )}

        <div className="Search">
          <input
            maxLength={30}
            type="text"
            aria-label="Id no canal"
            placeholder="ID do canal"
          />

          <button onClick={() => handleInputValue()}>
            <img src={search} />
          </button>
        </div>

        <div>
          {inputValue == "" ? (
            ""
          ) : (
            <>
              <h2>Videos:</h2>
            </>
          )}
          <div className="video_list">
            {inputValue == "" ? (
              ""
            ) : (
              <>
                <Videos videos={videos} /> 
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
