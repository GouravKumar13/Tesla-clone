import React from "react";
import styled from "styled-components";
function Section({title,discription,leftbtn,rightbtn,backgroundImg}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{discription} </p>
      </ItemText>
      <Buttons>
        <ButtonGroup>
          <LeftButton>{leftbtn}</LeftButton>
          <RightButton>{rightbtn}</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${props=> `url("/images/${props.bgImage}")`} ;
  color: red;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

const LeftButton = styled.div`
  color: #ffffff;
  background: #171a20;
  opacity: 80%;
  border-radius: 4px;
  height: 40px;
  width: 256px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  margin: 0.5rem;
`;
const RightButton = styled(LeftButton)`
  color: #393c41;
  background: #f4f4f4;
`;
const DownArrow = styled.img`
  ${"" /* margin-top: 1.25rem; */}
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;