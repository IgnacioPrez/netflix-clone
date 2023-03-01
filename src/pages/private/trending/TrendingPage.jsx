import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { BtnsHeroInfo, HeroHome, HeroHomeInfo, HeroInfoDescription, ImageBox, Loading } from "../../../components";
import { ContainerInfinityScroll, ContainerInfityElement } from "../../../components/components-for-scroll";
import { useHero, useScroll } from "../../../hooks";
import { imageBaseUrl, trendingUrl } from "../../../services/movie.service";

const TrendingPage = () => {
  const [items, activeIndex] = useHero(trendingUrl);
  const [trending, setTrending] = useState([]);
  const { loading } = useScroll(trending, setTrending, trendingUrl);
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
        {trending.map((trendingMoment) => (
          <ContainerInfityElement key={trendingMoment.id}>
            <img alt={trendingMoment.title} src={`${imageBaseUrl}${trendingMoment.backdrop_path}`} />
            {loading&&<Loading/>}
          </ContainerInfityElement>
        ))}
      </ContainerInfinityScroll>
    </>
  );
};

export default TrendingPage;
