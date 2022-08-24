import * as React from "react";
import { useEffect, useState } from "react";

import axios from "axios";


export function Videos() {
  interface videoProps {
    thumbnails: string;
    tittle: string;
    href: string;
  }

  const [videos, setVideos] = useState<videoProps>({
    thumbnails: "",
    tittle: "",
    href: "",
  });


  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/search?part=id%2Csnippet&channelId=UCnOoQt51D8tHnethj9rRm6A&key=AIzaSyAYnelLuOksmQMk1xRkI11Ya0KpErA-iGo&maxResults=3&type=video&order=date"
      )
      .then((response) => {
        const resp = response.data;
        const thumbnail = resp.items[0].snippet.thumbnails.medium.url;
        const name = resp.items[0].snippet.title;
        const href = `https://www.youtube.com/watch?v=${resp.items[0].id.videoId}`;
        setVideos({
          thumbnails: thumbnail,
          tittle: name,
          href: href,
        });
      });
  }, []);

  return (
    <div className="video_section">
      <div className="video_section_header"></div>
      <div className="video_section_main">
        <img src={videos.thumbnails} alt="Imagem do Vídeo" />

        <h3>
          <a target="_blank" href={videos.href}>{videos.tittle}</a>
        </h3>
      </div>
    </div>
  );
}
