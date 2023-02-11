import styled from "styled-components";
import NetflixLogo from "../../assets/img/Logonetflix.png";
import infoDashboard from "../../utils/json/dashboard.utils.json";
import { useId } from "react";
import { Accordion } from "../../components/accordion";
import listDashboard from "../../utils/json/dashboard.list.json";

const Dashboard = () => {
  const moreId = useId();
  const accordionId = useId();
  return (
    <Container>
      <ContainerHero>
        <HeroHead>
          <img src={NetflixLogo} alt="Netflix Logo" />
          <HeroHeadBtn>
            <p>Iniciar sesion</p>
          </HeroHeadBtn>
        </HeroHead>
        <HeroInfo>
          <h2>Peliculas y series ilimitadas y mucho más</h2>
          <p>Disfruta donde quieras. Cancela cuando quieras.</p>
          <p>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix
          </p>
        </HeroInfo>
      </ContainerHero>
      <ContainerCardMore>
        {infoDashboard.map((el) => {
          return (
            <Card key={moreId}>
              <img src={el.img} alt={el.title} />
              <div>
                <p>{el.title}</p>
                <p>{el.description}</p>
              </div>
            </Card>
          );
        })}
      </ContainerCardMore>
      <ContainerList>
        <h3>Preguntas frecuentes</h3>
        {listDashboard.map((el) => {
          return (
            <Accordion title={el.ask} key={accordionId}>
              {el.description}
            </Accordion>
          );
        })}
      </ContainerList>
      <ContainerFooter>
        <p>¿Preguntas? Llama al xxxxx</p>
        <ListFooter>
          <div>
            <p>preguntas frecuentes</p>
            <p>prensa</p>
            <p>terminos</p>
            <p>contáctanos</p>
          </div>
          <div>
            <p>Terminos de las tarjetas de regalo</p>
            <p>Relaciones con inversionistas</p>
            <p>Privacidad</p>
            <p>Prueba de velocidad</p>
          </div>
          <div>
            <p>Centro de ayuda</p>
            <p>Empleo</p>
            <p>Preferencias de cookies</p>
            <p>Avisos legales</p>
          </div>
          <div>
            <p>Cuenta</p>
            <p>Formas de ver</p>
            <p>Interacción corporativa</p>
            <p>Solo en Netflix</p>
          </div>
        </ListFooter>
        <p>Netflix Argentina</p>
      </ContainerFooter>
    </Container>
  );
};

export default Dashboard;
export const ContainerFooter = styled.footer`
  height: 20rem;
  background: inherit;
  padding: 3em;
  border-top: 10px solid rgba(45, 45, 45, 1);
  color: rgba(255, 255, 255, 0.7);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media screen and (min-width: 320px) and (max-width:768px){
    height: auto;
    padding:0;
    padding: 1em;
  }
  `;
export const ListFooter = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: .5em;
  width: 85%;
  div{
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: small;
    padding: 1em;
    p{
      text-decoration: underline;
      cursor: pointer;
    }
  }
  @media screen and (min-width: 320px) and (max-width:480px){
    flex-direction:column;
    width: 100%;
  }
`;

export const ContainerList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: inherit;
  justify-content: center;
  align-items: center;
  border-top: 10px solid rgba(45, 45, 45, 1);
  padding-top: 3em;
  padding-bottom: 5em;
  text-align: center;
  h3 {
    color: #fff;
    font-size: 47px;
  }
  @media screen and (min-width: 320px) and (max-width:480px){
    h3{
      font-size: larger;
    }
  }
`;
export const Container = styled.main`
  background: #000;
  height: 100vh;
  width: 100%;
`;

export const ContainerHero = styled.div`
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/d9cacfda-1059-447d-be22-bdb885bc1f05/AR-es-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  height: 35rem;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroHead = styled.div`
  display: flex;
  img {
    width: 8rem;
  }
  justify-content: space-between;
  padding: 1.4em;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width:480px){
    img {
      width: 7rem;
    }

  }
`;

export const HeroInfo = styled.div`
  text-align: center;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    font-size: 2.5rem;
    font-weight: bold;
  }
  p {
    font-weight: 400;
    font-size: 1.5rem;
  }
  width: 50em;
  @media screen and (min-width: 320px) and (max-width:768px){
    width:100%;
    h2{
      font-size: larger;
    }
    p{
      font-size: medium;
    }
  }

`;

export const HeroHeadBtn = styled.div`
  width: 12rem;
  display: flex;
  justify-content: center;
  p {
    color: #fff;
    padding: 0.4em;
    border-radius: 5px;
    background-color: #e50914;
    width: 7rem;
    text-align: center;
  }
  @media screen and (min-width: 320px) and (max-width:480px){
   width: 8rem;
   padding: 0.3em;
  }
`;

export const ContainerCardMore = styled.section`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: inherit;
`;

export const Card = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  border-top: 10px solid rgba(45, 45, 45, 1);
  img {
    height: 23rem;
    width: 45%;
    object-fit: contain;
  }
  div {
    width: 45%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: #fff;
    gap: 20px;
  }
  p:nth-child(1) {
    font-size: 55px;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: x-large;
  }
  @media screen and (min-width: 320px) and (max-width:768px){
    width: 100%;
    flex-direction: column;
    img{
      height: 13rem;
      width: 50%;
    }
    p:nth-child(1){
      font-size: large;
    }
    p:nth-child(2){
      font-size: medium;
    }
  }
`;
