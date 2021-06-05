import React from "react";
import styled from "styled-components";

function Section() {
  return;
  <Container>
    <ItemText>
      <h1>Model S</h1>
      <p>Order Online for Touchless Delivery</p>
    </ItemText>
  </Container>;
}

export default Section;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ItemText = styled.div``;
