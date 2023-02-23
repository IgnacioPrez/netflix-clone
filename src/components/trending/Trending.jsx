import { useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useGetData } from "../../hooks";
import { imageBaseUrl, trendingUrl } from "../../services/movie.service";
import { BtnLeft, BtnRight, ContainerCardImagesHome, Slide } from "../viewCard";

const Trending = () => {
  const listRefTwo = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [getData] = useGetData(trendingUrl)
  const trendingState = getData

  const handleClick = (direction) => {
    setIsMoved(true);
    if (listRefTwo.current) {
      const { scrollLeft, clientWidth } = listRefTwo.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      listRefTwo.current.scrollTo({left:scrollTo,behavior:"smooth"})
    }
    
  };
  return (
    <ContainerCardImagesHome>
      <h4>Tendencias</h4>
      {isMoved &&<BtnLeft onClick={() => handleClick("left")}>
        <MdArrowBackIos />
      </BtnLeft>}
      <Slide ref={listRefTwo}>
        {trendingState.map((el) => {
          return <img key={el.id} src={`${imageBaseUrl}${el.backdrop_path}`} />;
        })}
      </Slide>
      <BtnRight onClick={() => handleClick("right")}>
        <MdArrowForwardIos />
      </BtnRight>
    </ContainerCardImagesHome>
  );
};

export default Trending;
