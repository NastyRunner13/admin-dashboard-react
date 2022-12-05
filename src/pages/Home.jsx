import React from "react";
import styled from "styled-components";
import Chart from "../components/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
import { userData } from "../DummyData";
import SmallWidget from "../components/SmallWidget";
import LargeWidget from "../components/LargeWidget";

const HomeComponent = styled.div`
  flex: 4;
  background-color: white;
`;

const HomeWidgets = styled.div`
  display: flex;
  margin: 20px;
`;

export default function Home() {
  return (
    <HomeComponent>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <HomeWidgets>
        <SmallWidget />
        <LargeWidget />
      </HomeWidgets>
    </HomeComponent>
  );
}
