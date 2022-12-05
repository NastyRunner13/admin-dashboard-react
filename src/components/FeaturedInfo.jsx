import React from "react";
import styled from "styled-components";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0 20px;
  padding: 25px;
  border-radius: 10px;
  cursor: pointer;
  background-color: white;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: felx;
  align-items: center;
`;
const FeaturedMoney = styled.span`
  font-weight: 600;
  font-size: 30px;
`;
const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;
const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;

export default function FeaturedInfo() {
  return (
    <Featured>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,918</FeaturedMoney>
          <FeaturedMoneyRate>
            -11.4
            <ArrowDropDownIcon style={{ marginLeft: "2px", color: "red" }} />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month.</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,123</FeaturedMoney>
          <FeaturedMoneyRate>
            -1.4
            <ArrowDropDownIcon style={{ marginLeft: "2px", color: "red" }} />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month.</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,338</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4
            <ArrowDropUpIcon style={{ marginLeft: "2px", color: "green" }} />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to last month.</FeaturedSub>
      </FeaturedItem>
    </Featured>
  );
}
