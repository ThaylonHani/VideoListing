import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url: string, input?: string | undefined) {
  const [videos, setVideos] = useState([
    {
      thumb: "",
      title: "",
      href: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(url)
      .then(async (response) => {
        const items = await response.data.items;
        setVideos(items);
      })
      .catch((err) => {
        alert(`${err.message} \nChannel not found \nVideos from other channels will be returned`);
      });
  }, [input]);

  return { videos };
}
