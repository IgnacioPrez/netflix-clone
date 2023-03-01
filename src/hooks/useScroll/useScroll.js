import { useEffect, useState } from "react";
import { baseUrl, MyKey } from "../../services/movie.service";

export function useScroll(state, setState, url) {
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
      setPages((prev) => prev + 1);
    }
  };
  const getfilesMovies = () => {
    let newUrl = `${baseUrl}${url}?api_key=${MyKey}&page=${pages}`;
    try {
      setLoading(true);

      fetch(newUrl)
        .then((response) => response.json())
        .then((data) => {
          let newData = state.concat(data.results);
          setState(newData);
          setLoading(false);
        });
    } catch (error) {
      throw new Error("The infinity scroll is failed");
    }
  };
  useEffect(() => {
    getfilesMovies();
  }, [pages]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { loading,state};
}
