import * as React from "react";

interface videoParameter{
  thumb: string,
  tittle: string,
  href: string
}

export function Video({thumb , tittle, href}: videoParameter) {
  
  

  return (
    <div className="video_section">
      <div className="video_section_header"></div>
      <div className="video_section_main">
        <img src={thumb} alt="Imagem do Vídeo" />
        <h3>
          <a target="_blank" href={`https://www.youtube.com/watch?v=${href}`}>{tittle}</a>
        </h3>
      </div>
    </div>
  );
}
