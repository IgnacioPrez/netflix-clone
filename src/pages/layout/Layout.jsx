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
        <FooterLayoutDashboard>
          <TitleFooter>
            <p>¿Preguntas? Llama al xxxxx</p>
          </TitleFooter>
          <FooterLayoutInfo>
            <div>
              <p>Preguntas frecuentes</p>
              <p>Preferencias de cookies</p>
            </div>
            <div>
              <p>Centro de ayuda</p>
              <p>Información corporativa</p>
            </div>
            <div>
              <p>Términos de uso</p>
            </div>
            <div>
              <p>Privacidad</p>
            </div>
          </FooterLayoutInfo>
        </FooterLayoutDashboard>
      </HeroLayout>
    </ContainerLayout>
  );
};

export default Layout;

export const FooterLayoutDashboard = styled.footer`
  height: 17em;
  background-color: rgb(0, 0, 0, 0.7);
  color: #737373;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media (max-width: 768px){
    height: auto;
    width: 100vw;
  }
`;

export const FooterLayoutInfo = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-start;
  gap: 60px;
  align-items: center;
  padding: 1em;
  height: 60%;
  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;
    width: auto;
    font-size: .8rem;
  }
  p{
    cursor: pointer;
    &:hover{
      color: rgba(153, 147, 147 ,.5);
    }
  }
  @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    div{
      width: 100%;
      flex-direction: row;
    }
  }
`;

export const TitleFooter = styled.div`
  width: 58%;
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 768px){
    width: 100%;
    padding: 0.2em;
  }
`
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
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/d9cacfda-1059-447d-be22-bdb885bc1f05/AR-es-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  height: auto;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

/* rgba(0,0,0,.75)

letras 
*/
