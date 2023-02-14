import { lazy } from "react";
import { Navigate, Route } from "react-router-dom";
import { LayoutHome } from "../../components";
import { privateRoutes } from "../../routes";
import { RoutesWithNotFound } from "../not-found";
const Home = lazy(() => import("./home/Home"));

const Private = () => {
  return (
    <RoutesWithNotFound>
      <Route path="/" element={<Navigate to={privateRoutes.HOME} />} />
      <Route element={<LayoutHome/>}>
        <Route path={privateRoutes.HOME} element={<Home />} />
      </Route>

      {/* Si necesitamos más paginas las metemos acá */}
    </RoutesWithNotFound>
  );
};

export default Private;
