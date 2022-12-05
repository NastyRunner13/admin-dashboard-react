import LineStyleIcon from "@mui/icons-material/LineStyle";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import DynamicFeedOutlinedIcon from "@mui/icons-material/DynamicFeedOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import ReportIcon from "@mui/icons-material/Report";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Sidebar = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: #def5e5;
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;
const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;

const List = styled.ul`
  padding: 8px;
`;

const ListItem = styled.li`
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  font-size: 18px;

  :hover {
    background-color: white;
  }
`;

export default function SideBar() {
  return (
    <Sidebar>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link to={"/"}>
              <ListItem>
                <LineStyleIcon
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Home
              </ListItem>
            </Link>
            <ListItem>
              <AnalyticsOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUpOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link to={"/users"}>
              <ListItem>
                <PersonOutlineOutlinedIcon
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Users
              </ListItem>
            </Link>
            <Link to={"/products"}>
              <ListItem>
                <StorefrontOutlinedIcon
                  style={{ marginRight: "5px", fontSize: "20px" }}
                />
                Products
              </ListItem>
            </Link>
            <ListItem>
              <AttachMoneyOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Transactions
            </ListItem>
            <ListItem>
              <EqualizerOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <EmailOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeedOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutlineOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutlineOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Manage
            </ListItem>
            <ListItem>
              <TimelineOutlinedIcon
                style={{ marginRight: "5px", fontSize: "20px" }}
              />
              Analytics
            </ListItem>
            <ListItem>
              <ReportIcon style={{ marginRight: "5px", fontSize: "20px" }} />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Sidebar>
  );
}
