import React from "react";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
    </div>
  );
}

export default Home;
