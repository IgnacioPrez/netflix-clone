import { useState, useEffect } from "react";
import { baseUrl, MyKey } from "../../services/movie.service";
import { getServices } from "../../services/fetchinOfDates";

export function useHero(newUrl) {
  const [{ items, activeIndex }, setState] = useState({
    items: [],
    activeIndex: 0,
  });
  const [number, setNumber] = useState(0);

   const getImages = async () => {
    const data = await getServices(baseUrl + newUrl, MyKey);
    setState((state) => ({
      ...state,
      items: data,
    }));
  };
  useEffect(() => {
    getImages();
  }, []); 

  useEffect(() => {
    moveTo(number);
  }, [number]);

  const moveTo = (newIndex) => {
    setTimeout(() => {
      setNumber(number + 1);
    }, 20000);
    if (newIndex === -1) {
        setState((s) => ({ ...s, activeIndex: items.length - 1 }));
      return;
    }
    if (newIndex === items.length) {
        setState((s) => ({ ...s, activeIndex: 0 }));
      return;
    }

    setState((s) => ({ ...s, activeIndex: newIndex }));
  };

  return [items, activeIndex];
}
