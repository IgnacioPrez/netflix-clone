import { CardMovie, Trending, TvSeason } from "../../../components";
import { HeroHomeInfo, HeroHome, RowMovies, ImageBox, HeroInfoDescription, BtnsHeroInfo } from "../../../components/component-for-home";
import Loading from "../../../components/loading/Loading";
import { useHero } from "../../../hooks";
import { imageBaseUrl, trendingUrl } from "../../../services/movie.service";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
const Home = () => {
  const [items, activeIndex] = useHero(trendingUrl);
  return (
    <>
      <HeroHome>
        {!items.length ? <Loading /> : <ImageBox posterBackground={`${imageBaseUrl}${items[activeIndex].backdrop_path}`}></ImageBox>}
        <HeroHomeInfo>
          {!items.length ? (
            <Loading />
          ) : (
            <HeroInfoDescription>
              {items[activeIndex].title ? <p>{items[activeIndex].title}</p> : <p>{items[activeIndex].name}</p>}
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
