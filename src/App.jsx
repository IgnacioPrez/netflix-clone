import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";
import { AuthGard } from "./guards";
import { Dashboard, Layout, RoutesWithNotFound } from "./pages";
import { privateRoutes, PublicRoutes } from "./routes";
const Login = lazy(() => import("./pages/login/Login"));
const SignUp = lazy(() => import("./pages/signup/SignUp"));
const Private = lazy(() => import("./pages/private/Private"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <RoutesWithNotFound>
          <Route path="/" element={<Navigate to={privateRoutes.PRIVATE}/>}/>
            <Route path={PublicRoutes.DASHBOARD} element={<Dashboard />} />
            <Route element={<Layout />}>
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route path={PublicRoutes.SIGNUP} element={<SignUp />} />
            </Route>
            <Route element={<AuthGard />}>
              <Route path={`${privateRoutes.PRIVATE}/*`} element={<Private />} />
            </Route>
          </RoutesWithNotFound>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
