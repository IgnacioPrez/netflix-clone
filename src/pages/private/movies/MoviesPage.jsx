import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { BtnsHeroInfo, HeroHome, HeroHomeInfo, HeroInfoDescription, ImageBox, Loading } from "../../../components";
import { ContainerInfinityScroll, ContainerInfityElement } from "../../../components/components-for-scroll";
import { useHero, useScroll } from "../../../hooks";
import { discoverUrl, imageBaseUrl } from "../../../services/movie.service";

const MoviesPage = () => {
  const [items, activeIndex] = useHero(discoverUrl);
  const [datas] = useScroll(discoverUrl);
  const movies = datas;
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
      <ContainerInfinityScroll>
        {movies.map((movie) => (
          <ContainerInfityElement key={movie.id}>
            <img alt={movie.title} src={`${imageBaseUrl}${movie.backdrop_path}`} />
          </ContainerInfityElement>
        ))}
      </ContainerInfinityScroll>
    </>
  );
};

export default MoviesPage;
