import { FaPlay } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import { BtnsHeroInfo, HeroHome, HeroHomeInfo, HeroInfoDescription, ImageBox, Loading } from '../../../components'
import { ContainerInfinityScroll, ContainerInfityElement } from '../../../components/components-for-scroll'
import { useHero, useScroll } from '../../../hooks'
import {imageBaseUrl,trendingTvUrl} from "../../../services/movie.service"
const TvShowsPage = () => {
  const [items, activeIndex] = useHero(trendingTvUrl);
  const [datas] = useScroll(trendingTvUrl);
  const tvShows = datas;
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
        {tvShows.map((tvShow) => (
          <ContainerInfityElement key={tvShow.id}>
            <img alt={tvShow.title} src={`${imageBaseUrl}${tvShow.backdrop_path}`} />
          </ContainerInfityElement>
        ))}
      </ContainerInfinityScroll>
    </>
  )
}

export default TvShowsPage