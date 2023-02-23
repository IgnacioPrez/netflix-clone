import styled from "styled-components";

export const ContainerInfinityScroll = styled.section`
  width: 100vw;
  height: auto;
  padding: 1em;
  background: #141414;
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

export const ContainerInfityElement = styled.div`
  margin-bottom: 1em;

  img {
    width: 15rem;
    height: 9rem;
    cursor: pointer;
    border-radius: 4px;
    &:hover{
      transform: scale(1.4);
      z-index: 2;
    }
    transition: transform 1s ease;
  }
  `;
