import {
  HeroHomeInfo,
  HeroHome,
  ContainerCardMovies,
  HeadNavigatorHome,
  RowMovies,
} from "../../../components/component-for-home";

const Home = () => {
  return (
    <>
      <HeadNavigatorHome></HeadNavigatorHome>
      <HeroHome>
        <HeroHomeInfo></HeroHomeInfo>
      </HeroHome>
      <p>O.o</p>
      <ContainerCardMovies>
        <RowMovies />
      </ContainerCardMovies>
    </>
  );
};

export default Home;
