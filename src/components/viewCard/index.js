import styled from "styled-components";

export const ContainerCardImagesHome = styled.div`
  width: 100%;
  z-index: 2;
  padding: 0.3em;
  position: relative;
  h4 {
    color: #fff;
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: 500;
  }
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Slide = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 25px;
  overflow: hidden;

  img {
    width: 15rem;
    height: 9rem;
  }
  transition: all 1s ease;
`;

export const BtnLeft = styled.button`
  position: absolute;
  left: 0;
  top: 22%;
  color: #fff;
  background-color: transparent;
  border: none;
  z-index: 3;
  cursor: pointer;
  height: 9.3rem;
  &:hover {
    background-color: rgba(20, 20, 20, 0.5);
  }
  padding-left: 0.5em;
  svg {
    font-size: 2rem;
  }
`;
export const BtnRight = styled.button`
  position: absolute;
  right: 0;
  top: 22%;


  color: #fff;
  background-color: transparent;
  border: none;
  padding-left: 0.5em;
  cursor: pointer;
  height: 9.3rem;

  svg {
    font-size: 2rem;
  }
  &:hover {
    background-color: rgba(20, 20, 20, 0.5);
  }
`;
