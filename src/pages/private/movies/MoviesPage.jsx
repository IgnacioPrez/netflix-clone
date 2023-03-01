import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { BtnsHeroInfo, HeroHome, HeroHomeInfo, HeroInfoDescription, ImageBox, Loading } from "../../../components";
import { ContainerInfinityScroll, ContainerInfityElement } from "../../../components/components-for-scroll";
import { useHero, useScroll } from "../../../hooks";
import { baseUrl, discoverUrl, imageBaseUrl, MyKey } from "../../../services/movie.service";

const MoviesPage = () => {
  const [items, activeIndex] = useHero(discoverUrl);
  const [pages] = useScroll();
  const [movies, setMovies] = useState([]);
  const getfilesMovies = (url) => {
    let newUrl = `${baseUrl}${url}?api_key=${MyKey}&page=${pages}`;
    fetch(newUrl)
      .then((response) => response.json())
      .then((data) => {
        let newData = movies.concat(data.results);
        setMovies(newData);
      });
  };
  useEffect(() => {
    getfilesMovies(discoverUrl);
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
