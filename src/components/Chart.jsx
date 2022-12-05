import React from "react";
import styled from "styled-components";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ChartComponent = styled.div`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
`;

const ChartTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 700;
`;

export default function Chart({ data, dataKey, title, grid }) {
  return (
    <ChartComponent>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#8EC3B0" />
          <Line type="monotone" dataKey={dataKey} stroke="#8EC3B0" />
          <Tooltip />
          <CartesianGrid stroke="#DEF5E5" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </ChartComponent>
  );
}
