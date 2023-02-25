import styled from "styled-components";

export const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  background: #141414;
  position: relative;
`;
export const HeadNavigatorHome = styled.header`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  align-items: center;
  color: #fff;
  height: 3.5rem;
  padding: 1.3em;
  height: 5rem;
  z-index: 7;
  background-color: ${({ isScrolled }) => (isScrolled ? "rgb(20, 20, 20)" : "transparent")};
  transition: background-color 0.5s ease-in-out;
  @media (max-width: 768px) {
    padding: 0;
    height: 4rem;
  }
`;

export const ContainerLogoandNav = styled.div`
  display: flex;
  align-items: center;
  width: 65%;
  gap: 25px;
  img {
    width: 6.5rem;
  }
  @media (max-width: 768px) {
    height: 100%;
    width: 35%;
    justify-content: center;
    gap: 4px;
    img {
      width: 5rem;
    }
  }
`;
export const Navbar = styled.nav`
  span {
    display: none;
  }
  @media (max-width: 768px) {
    position: relative;
    span {
      display: block;
      svg {
        font-size: x-large;
        &:hover {
          transform: ${({ viewMobileNav }) => (viewMobileNav ? "rotate(180deg)" : "rotate(0deg)")};
        }
        transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
      }
    }
  }
`;
export const ListOptions = styled.ul`
  display: flex;
  list-style: none;
  gap: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1rem;
  li {
    a {
      color: #fff;
      text-decoration: none;
      &:hover {
        color: #e5e5e5;
      }
      &:visited {
        color: #fff;
      }
    }
  }
  @media (max-width: 768px) {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    width: 12.5rem;
    height: 18rem;
    left: -55px;
    top: 45px;
    padding: 1em;
    border-top: 2px solid #e5e5e5;
    text-align: center;
    display: ${({ viewMobileNav }) => (viewMobileNav ? "block" : "none")};
    li {
      padding: 0.4em;
      margin: 5px;
    }
  }
`;
export const ContainerUserAndSearch = styled.div`
  display: flex;
  gap: 30px;
  width: 30%;
  align-items: center;
  justify-content: end;
  @media (max-width: 768px) {
    width: 75%;
    gap: 2px;
    height: 100%;
    padding: 3px;
  }
`;
export const ContainerUser = styled.div`
  width: 6rem;
  display: flex;
  gap: 10px;
  align-items: center;
  position: relative;
  svg {
    font-size: x-large;
  }
  img {
    border-radius: 5px;
    height: 2.2rem;
    cursor: pointer;
  }
  span {
    cursor: pointer;
    width: 2rem;
    svg {
      width: 100%;
      transform: ${({ viewUserOptions }) => (viewUserOptions ? "rotate(180deg)" : "none")};
      transition: transform 367ms cubic-bezier(0.21, 0, 0.07, 1);
    }
  }
  @media (max-width: 768px) {
    padding: 0.2em;
    span {
      display: none;
    }
    img {
      border-radius: 5px;
      height: 2rem;
    }
    gap: 2px;
    justify-content: end;
    width: max-content;
  }
`;

export const ContainerUserOptions = styled.ul`
  position: absolute;
  width: 12rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  padding: 0.5em;
  li {
    list-style: none;
    display: flex;
    gap: 10px;
    align-items: center;
    &:nth-child(5) {
      border-top: 1px solid grey;
    }
  }
  background-color: rgba(0, 0, 0, 0.9);
  top: 50px;
  right: 35px;
  button {
    background: none;
    color: inherit;
    width: 100%;
    border: none;
    padding: 1em;
    cursor: pointer;
    &:hover {
      color: #e5e5e5;
    }
  }
  visibility: ${({ viewUserOptions }) => (viewUserOptions ? "visibility" : "hidden")};
`;
export const ContainerSearch = styled.form`
  position: relative;
  height: 2.7rem;
  input {
    background-color: ${({ toggle }) => (toggle ? "#141414" : "transparent")};
    padding: 0.3em;
    border: ${({ toggle }) => (toggle ? "solid 1px #fff" : "none")};
    width: ${({ toggle }) => (toggle ? "16rem" : "0rem")};
    height: 2.5rem;
    color: #fff;
    padding-left: 2.5rem;
    transition: all 0.5s;
    &::placeholder {
      color: #e5e5e5;
    }
    &:focus {
      outline: none;
    }
  }
  svg {
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    transform: translate(0, 30%);
    left: 0.3rem;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    svg {
      font-size: 1.2rem;
      transform: translate(0, 30%);
      top: 15%;
    }
    input {
      padding: 0;
      width: ${({ toggle }) => (toggle ? "10rem" : "0rem")};
      height: 2.3rem;
      padding-left: 1.7rem;
    }
  }
`;
export const HeroHome = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`;
export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${({ posterBackground }) => posterBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease-in-out;
`;

export const HeroHomeInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 20%;
  height: 20rem;
  width: 50%;
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
    bottom: 0;
    padding: 1em;
  }
`;

export const HeroInfoDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  width: 80%;
  p {
    &:nth-child(1) {
      color: #e5e5e5;
      font-size: 2.5rem;
    }
    &:nth-child(2) {
      color: #fff;
      font-size: 1rem;
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    width: 100%;

    p {
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(1) {
        font-size: x-large;
      }
    }
  }
`;
export const BtnsHeroInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  button {
    &:nth-child(1) {
      width: 20rem;
      padding: 0.5em;
      border: none;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 1.3rem;
      font-weight: 500;
      background-color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #c2c2c2;
      }
    }
    &:nth-child(2) {
      width: 15rem;
      padding: 0.5em;
      border: none;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 1.3rem;
      font-weight: 500;
      background-color: rgba(111, 111, 111, 1);
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: rgba(109, 109, 110, 0.5);
      }
      svg {
        font-size: xx-large;
      }
    }
  }
  @media (max-width: 768px) {
    button {
      &:nth-child(1) {
        width: 7rem;
        padding: 0;
        font-size: small;
      }
      &:nth-child(2) {
        width: 8.5rem;
        padding: 0.2em;
        font-size: small;
      }
    }
  }
`;
export const RowMovies = styled.section`
  display: flex;
  flex-direction: column;
  height: 42em;
  padding: 1em;
  width: 100%;
  background: #141414;
  justify-content: space-between;
`;
