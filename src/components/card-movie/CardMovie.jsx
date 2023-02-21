import { imageBaseUrl } from "../../services/movie.service";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useState, useRef } from "react";
import { BtnLeft, BtnRight, ContainerCardImagesHome, Slide } from "../viewCard";
import { useSelector } from "react-redux";

const CardMovie = () => {
  const listRef = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const movieState = useSelector(state => state.movies)
  const handleClick = (direction) => {
    setIsMoved(true);
    if (listRef.current) {
      const { scrollLeft, clientWidth } = listRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      listRef.current.scrollTo({left:scrollTo,behavior:"smooth"})
    }
  };
  return (
    <ContainerCardImagesHome>
      <h4>Peliculas</h4>
      {isMoved &&<BtnLeft onClick={() => handleClick("left")}>
        <MdArrowBackIos />
      </BtnLeft>}
      <Slide ref={listRef}>
        {movieState.map((el) => {
          return <img key={el.id} src={`${imageBaseUrl}${el.backdrop_path}`} />;
        })}
      </Slide>
      <BtnRight onClick={() => handleClick("right")}>
        <MdArrowForwardIos />
      </BtnRight>
    </ContainerCardImagesHome>
  );
};

export default CardMovie;
