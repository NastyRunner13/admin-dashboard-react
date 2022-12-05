import React from "react";
import styled from "styled-components";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { Badge } from "@mui/material";

const Topbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  -webkit-box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.52);
  -moz-box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.52);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.52);
`;

const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TopLeft = styled.div``;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: #8ec3b0;
  cursor: pointer;
`;

const Icon = styled.div`
  cursor: pointer;
  margin-right: 25px;
  color: #8ec3b0;
`;

const TopAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

export default function TopBar() {
  return (
    <Topbar>
      <Wrapper>
        <TopLeft>
          <Logo>princeadmin</Logo>
        </TopLeft>
        <TopRight>
          <Icon>
            <Badge badgeContent={4} color="primary">
              <NotificationsNoneOutlinedIcon />
            </Badge>
          </Icon>
          <Icon>
            <Badge badgeContent={2} color="primary">
              <LanguageIcon />
            </Badge>
          </Icon>
          <Icon>
            <SettingsIcon />
          </Icon>
          <TopAvatar src="https://as2.ftcdn.net/v2/jpg/04/67/33/39/1000_F_467333967_czE5796sddMzjJTp1YeunsbYhRq1rxD9.jpg" />
        </TopRight>
      </Wrapper>
    </Topbar>
  );
}
