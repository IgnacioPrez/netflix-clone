import { useRef, useState } from "react";
import { searchMovies } from "../../services/fetchinOfDates";

export function useMovies(query) {
  const [searchElement, setSearchElement] = useState([]);
  const [loading, setLoading] = useState(false);
  const prevSearch = useRef();
  const getMovies = async () => {
    if (query === prevSearch.current) return;
    if(query === '')return
    try {
      setLoading(true);
      prevSearch.current = query;
      const movie = await searchMovies(query);
      setSearchElement(movie);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return { searchElement, getMovies, loading };
}
