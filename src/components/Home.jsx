import React from "react";
import Section from "./Section";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import SectionFive from "./SectionFive";
import SectionSix from "./SectionSix";
import SectionSeven from "./SectionSeven";

function Home() {
  return (
    <div className="container">
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      />

      <SectionTwo
        title="Model Y"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      />

      <SectionThree
        title="Model 3"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      />

      <SectionFour
        title="Model X"
        description="Order Online For Touchless Delivery"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      />

      <SectionFive
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Custom order"
        RightBtnText="Existing inventory"
      /> 

    <SectionSix
      title="Solar for New Roofs"
      description="Solar Roof Costs Less Than a New Roog Plus Solar Panels"
      leftBtnText="Order noew"
      RightBtnText="Learn More"
    />

     <SectionSeven
      title="Accessories"
      description=""
      leftBtnText="Shop noew"
      RightBtnText="Learn More"
    />
    </div>
  );
}

export default Home;
