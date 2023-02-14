import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import NetflixLogo from "../../assets/img/Logonetflix.png";
import { PublicRoutes } from "../../routes";
const Layout = () => {
  return (
    <ContainerLayout>
      <HeroLayout>
        <TitleLayout>
          <Link to={PublicRoutes.DASHBOARD}>
            <img src={NetflixLogo} alt="Netflix logo" />
          </Link>
        </TitleLayout>
        <Outlet></Outlet>
      </HeroLayout>
    </ContainerLayout>
  );
};

export default Layout;

export const TitleLayout = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  padding: 1em;

  img {
    width: 7rem;
  }
`;
export const ContainerLayout = styled.div`
  background: #000;
  height: 100vh;
  width: 100%;
`;
export const HeroLayout = styled.div`
  position: relative;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/d9cacfda-1059-447d-be22-bdb885bc1f05/AR-es-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  height: 100vh;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;
