import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Trending, TvSeason } from "../../../components";
import CardMovie from "../../../components/card-movie/CardMovie";
import {
  HeroHomeInfo,
  HeroHome,
  RowMovies,
  ImageBox,
  HeroInfoDescription,
  BtnsHeroInfo,
} from "../../../components/component-for-home";
import Loading from "../../../components/loading/Loading";
import { useHero } from "../../../hooks";
import { getAllFetching } from "../../../redux/state/movieSlice";
import { getAllTrending } from "../../../redux/state/trendingSlice";
import { getAllTvSeason } from "../../../redux/state/tvSeasonSlice";
import { imageBaseUrl } from "../../../services/movie.service";
import { FaPlay } from "react-icons/fa";
import { FiInfo} from "react-icons/fi";
const Home = () => {
  const [items, activeIndex] = useHero();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFetching());
    dispatch(getAllTrending());
    dispatch(getAllTvSeason());
  }, []); 
  return (
    <>
      <HeroHome>
        {!items.length ? <Loading /> : <ImageBox posterBackground={`${imageBaseUrl}${items[activeIndex].backdrop_path}`}></ImageBox>}
        <HeroHomeInfo>
          {!items.length ? (
            <Loading />
          ) : (
            <HeroInfoDescription>
              {
                items[activeIndex].title ? <p>{items[activeIndex].title}</p> :  <p>{items[activeIndex].name}</p>
              }
              <p>{items[activeIndex].overview}</p>
              <BtnsHeroInfo>
                <button>
                  <FaPlay />
                  Reproducir
                </button>
                <button>
                  <FiInfo />
                  Más información
                </button>
              </BtnsHeroInfo>
            </HeroInfoDescription>
          )}
        </HeroHomeInfo>
      </HeroHome>
        <RowMovies>
          <CardMovie />
          <Trending />
          <TvSeason />
        </RowMovies>
    </>
  );
};

export default Home;
