import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { BtnsHeroInfo, HeroHome, HeroHomeInfo, HeroInfoDescription, ImageBox, Loading } from "../../../components";
import { ContainerInfinityScroll, ContainerInfityElement } from "../../../components/components-for-scroll";
import { useHero, useScroll } from "../../../hooks";
import { baseUrl, imageBaseUrl, trendingUrl, MyKey } from "../../../services/movie.service";

const TrendingPage = () => {
  const [items, activeIndex] = useHero(trendingUrl);
  const [trending, setTrending] = useState([]);
  const [pages] = useScroll();
  const getfilesData = (url) => {
    let newUrl = `${baseUrl}${url}?api_key=${MyKey}&page=${pages}`;
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        let newData = trending.concat(data.results);
        setTrending(newData);
      });
  };
  useEffect(() => {
    getfilesData(trendingUrl);
  }, [pages]);
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
          </ContainerInfityElement>
        ))}
      </ContainerInfinityScroll>
    </>
  );
};

export default TrendingPage;
