import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { LayoutHome } from "../../components";
import { privateRoutes } from "../../routes";
import { RoutesWithNotFound } from "../not-found";
const Home = lazy(() => import("./home/Home"));
const TrendingPage = lazy(() => import("./trending/TrendingPage"))
const TvShowsPage =lazy(() => import("./tv-shows/TvShowsPage"))
const MoviesPage = lazy(() => import("./movies/MoviesPage"))

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={privateRoutes.HOME} />} />
      <Route element={<LayoutHome/>}>
        <Route path={privateRoutes.HOME} element={<Home />} />
        <Route path={privateRoutes.MOVIES} element={<MoviesPage />} />
        <Route path={privateRoutes.TRENDING} element={<TrendingPage />} />
        <Route path={privateRoutes.TVSHOWS} element={<TvShowsPage />} />
      </Route>
    </RoutesWithNotFound>
  );
};

export default Private;
