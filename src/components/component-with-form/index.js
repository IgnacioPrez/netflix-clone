import styled from "styled-components";

export const ContainerForm = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: rgba(0, 0, 0, 0.75);
  height: 30rem;
  h3 {
    font-size: 1.5rem;
    width: 70%;
    color: #fff;
    font-weight: 800;
  }
  @media screen and (min-width: 320px) and (max-width: 468px) {
    width: 90%;
    height: 80%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 70%;
  input {
    background: #333;
    border: none;
    padding: 0.8em;
    border-radius: 4px;
    color: #fff;
  }
  button {
    padding: 0.8em;
    background: #e50914;
    border: none;
    border-radius: 4px;
    color: #fff;
    margin-top: 2em;
    cursor: pointer;
  }
  span{
    color: #e50914;
  }
`;
export const ContainerLoginForm = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerFormInfo = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;
  gap: 7px;
  p {
    color: #737373;
    &:nth-child(2){
      color: #fff;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 468px) {
    width: 90%;
  }
`;

