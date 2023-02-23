import { useEffect, useState } from "react";
import { baseUrl, MyKey } from "../../services/movie.service";

export function useScroll(url) {
  const [datas, setDatas] = useState([]);
  const [pages, setPages] = useState(1);
  const getfilesData = () => {
    let newUrl = `${baseUrl}${url}?api_key=${MyKey}&page=${pages}`;
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        let newData = datas.concat(data.results);
        setDatas(newData);
      });
  };

  useEffect(() => {
    getfilesData();
  }, [pages]);
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPages((prev) => prev + 1);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return [datas];
}
