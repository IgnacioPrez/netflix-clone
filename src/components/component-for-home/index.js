import styled from "styled-components";

export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  background: #141414;
  position: relative;
`;
export const HeadNavigatorHome = styled.div`
    width: 100%;
    position: sticky;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    height: 3.5rem;
`;
export const ContainerLogoandNav = styled.div`
    display: flex;
    align-items: center;
    width: 60%;
    gap: 40px;
    img{
        width: 8rem;
    }
    padding: 1em;
`
export const ListOptions = styled.nav`
    display: flex;
    list-style: none;
    gap: 40px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    li{
        &:hover{
           color:#e5e5e5;
        }
    }
`
export const HeroHome = styled.section``;
export const HeroHomeInfo = styled.div``;
export const ContainerCardMovies = styled.div``;
export const RowMovies = styled.section``;
