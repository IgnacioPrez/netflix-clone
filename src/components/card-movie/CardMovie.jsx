import { discoverUrl, imageBaseUrl} from "../../services/movie.service";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useRef} from "react";
import { BtnLeft, BtnRight, ContainerCardImagesHome, Slide } from "../viewCard";
import { useGetData } from "../../hooks";

const CardMovie = () => {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [getData] = useGetData(discoverUrl);
  const movieState = getData;
  const handleClick = (direction) => {
    setIsMoved(true);
    if (listRef.current) {
      const { scrollLeft, clientWidth } = listRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      listRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <ContainerCardImagesHome>
      <h4>Peliculas</h4>
      {isMoved && (
        <BtnLeft onClick={() => handleClick("left")}>
          <MdArrowBackIos />
        </BtnLeft>
      )}
      <Slide ref={listRef}>
        {movieState.map((el) => {
          return <img key={el.id} src={`${imageBaseUrl}${el.backdrop_path}`} alt={el.title} />;
        })}
      </Slide>
      <BtnRight onClick={() => handleClick("right")}>
        <MdArrowForwardIos />
      </BtnRight>
    </ContainerCardImagesHome>
  );
};

export default CardMovie;
