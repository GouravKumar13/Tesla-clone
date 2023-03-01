import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        discription="Order online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        title="Model Y"
        discription="Order online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        title="Model 3"
        discription="Order online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
      <Section
        title="Model X"
        discription="Order online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftbtn="custom order"
        rightbtn="existing inventory"
      />
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
