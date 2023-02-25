import styled from "styled-components";
import { imageBaseUrl } from "../../services/movie.service";
import ImageSrcReplace from "../../assets/netflix-1-logo-svgrepo-com.svg";
const RowCardSearch = ({ searchElement }) => {
  console.log(searchElement);
  return (
    <ContainerRowSearch>
      <RowSearch>
        {searchElement.map((el) => {
          return (
            <CardSearch key={el.id}>
              <img src={`${el.backdrop_path ? imageBaseUrl + el.backdrop_path : ImageSrcReplace}`} alt={el.original_title} />
              {!el.backdrop_path && <span>No esta disponible</span>}
            </CardSearch>
          );
        })}
      </RowSearch>
    </ContainerRowSearch>
  );
};

export default RowCardSearch;

export const ContainerRowSearch = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const RowSearch = styled.section`
  background: #141414;
  display: flex;
  height: 100%;
  flex-wrap: wrap;
  margin-top: 5em;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const CardSearch = styled.div`
  width: 15rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 50px;
  img {
    width: 100%;
    cursor: pointer;
    height: 13rem;
    border-radius: 4px;
    &:hover {
      transform: scale(1.3);
      z-index: 3;
    }

    transition: transform 1s ease-in-out;
  }

  span {
    position: absolute;
    bottom: 50%;
    width: 100%;
    text-align: center;
    background-color: #141414;
    color: #fff;
    z-index: 3;
    font-size: x-large;
  }
`;
