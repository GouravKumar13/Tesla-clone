import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Footer from './Footer';
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
            <Section
                title="Lowest Cost Sloar Panels in America"
                discription="Money-back guarantee"
                backgroundImg="solar-panel.jpg"
                leftbtn="custom order"
                rightbtn="Learn more"
            />
            <Section
                title="Solar for New Roofs"
                discription="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
                backgroundImg="solar-roof.jpg"
                leftbtn="Order now"
                rightbtn="learn more"
            />
            <Section
                title="Accessories"
                discription=""
                backgroundImg="accessories.jpg"
                leftbtn="shop now"
            />
            <Footer />
        </Container>
    );
}

export default Home;
const Container = styled.div`
    height: 100vh;
`;
