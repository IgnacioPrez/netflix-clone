import { useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useGetData } from "../../hooks";
import { imageBaseUrl, trendingTvUrl } from "../../services/movie.service";
import { BtnLeft, BtnRight, ContainerCardImagesHome, Slide } from "../viewCard";

const TvSeason = () => {
  const listRefThree = useRef();
  const [isMoved, setIsMoved] = useState(false);
  const [getData] = useGetData(trendingTvUrl);
  const tvSeasonState = getData;
  const handleClick = (direction) => {
    setIsMoved(true);
    if (listRefThree.current) {
      const { scrollLeft, clientWidth } = listRefThree.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      listRefThree.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };
  return (
    <ContainerCardImagesHome>
      <h4>Series</h4>
      {isMoved && (
        <BtnLeft onClick={() => handleClick("left")}>
          <MdArrowBackIos />
        </BtnLeft>
      )}
      <Slide ref={listRefThree}>
        {tvSeasonState.map((el) => {
          return <img key={el.id} src={`${imageBaseUrl}${el.backdrop_path}`} />;
        })}
      </Slide>
      <BtnRight onClick={() => handleClick("right")}>
        <MdArrowForwardIos />
      </BtnRight>
    </ContainerCardImagesHome>
  );
};

export default TvSeason;
