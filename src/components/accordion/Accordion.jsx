import { useState,useCallback,useRef } from "react";
import styled from "styled-components";


const Container = styled.div`
  padding: .5rem;
  background-color:rgba(45, 45, 45, 1);
  :hover{
    background-color: rgba(65, 65, 65, 1);
  }
  & + & {
    margin-top: -0.125rem;
  }
  width: 80%;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.25;
  cursor: pointer;
  h4{
    color: #fff;
  }
  @media screen and (min-width: 320px) and (max-width:480px){
    h4{
      font-size: large;
    }
  }
`;

const ContentWrapper = styled.div`
  max-height: ${(p) => `${p.maxHeight}px`};
  transition: max-height 0.25s ease-in-out;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 0 0 1rem;
  color: #fff;
  line-height: 1.5;
  text-align: left;
`;


const Accordion = ({ title, children }) => {
  const [isExpanded, setExpand] = useState(false);

  const contentRef = useRef();
  const contentHeight = isExpanded ? contentRef.current.scrollHeight : 0;

  const handleExpandToggle = useCallback(() => {
    setExpand(!isExpanded);
  }, [isExpanded]);

  return (
    <Container>
      <Title onClick={handleExpandToggle}>
        <h4>{title}</h4>
      </Title>
      <ContentWrapper maxHeight={contentHeight}>
        <Content ref={contentRef}>{children}</Content>
      </ContentWrapper>
    </Container>
  );
};

export default Accordion