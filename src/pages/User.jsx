import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const UserTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UserTitle = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

const UserAddButton = styled.button`
  background-color: teal;
  color: white;
  width: 80px;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const UserShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const UserShowTopTitle = styled.div`
  margin-left: 20px;
`;

const UserShowUsername = styled.div`
  font-weight: 600;
`;

const UserShowUserTitle = styled.div`
  font-weight: 300;
`;

const UserShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserShowBottom = styled.div`
  margin-top: 20px;
`;

const UserShowBottomTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: gray;
`;

const UserShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  color: #444;
`;

const UserShowInfoTitle = styled.span`
  margin-left: 10px;
`;

const Icon = styled.div``;

const UserUpdateTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

const UserUpdateForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const UserUpdateLeft = styled.div``;

const UserUpdateLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
`;

const UserUpdateItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const UserUpdateInput = styled.input`
  width: 250px;
  height: 30px;
  border-bottom: 1px solid gray;
`;

const UserUpdateRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UserUpdateUpload = styled.div`
  display: flex;
  align-items: center;
`;

const UserUpdateImg = styled.img`
  object-fit: cover;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  margin-right: 20px;
`;

const UserUpdateFileInput = styled.input`
  display: none;
`;
const UserUpdateFileLabel = styled.label``;

const UserUpdateBotton = styled.button`
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  background-color: #8ec3b0;
  color: white;
  font-weight: 600;
`;

export default function User() {
  return (
    <Container>
      <UserTitleContainer>
        <UserTitle>Edit User</UserTitle>
        <Link to="/newUser">
          <UserAddButton>Create</UserAddButton>
        </Link>
      </UserTitleContainer>
      <UserContainer>
        <UserShow>
          <UserShowTop>
            <UserShowImg src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
            <UserShowTopTitle>
              <UserShowUsername>Alan Backen</UserShowUsername>
              <UserShowUserTitle>Software Engineer</UserShowUserTitle>
            </UserShowTopTitle>
          </UserShowTop>
          <UserShowBottom>
            <UserShowBottomTitle>Account Details</UserShowBottomTitle>
            <UserShowInfo>
              <Icon>
                <PermIdentity />
              </Icon>
              <UserShowInfoTitle>annabeck99</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <Icon>
                <CalendarToday />
              </Icon>
              <UserShowInfoTitle>10.12.1999</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowBottomTitle>Contact Details</UserShowBottomTitle>
            <UserShowInfo>
              <Icon>
                <PhoneAndroid />
              </Icon>
              <UserShowInfoTitle>+91 7342676438</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <Icon>
                <MailOutline />
              </Icon>
              <UserShowInfoTitle>annabeck99@gmail.com</UserShowInfoTitle>
            </UserShowInfo>
            <UserShowInfo>
              <Icon>
                <LocationSearching />
              </Icon>
              <UserShowInfoTitle>New York | USA</UserShowInfoTitle>
            </UserShowInfo>
          </UserShowBottom>
        </UserShow>

        <UserUpdate>
          <UserUpdateTitle>Edit</UserUpdateTitle>
          <UserUpdateForm>
            <UserUpdateLeft>
              <UserUpdateItem>
                <UserUpdateLabel>Username</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="annabeck99" />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Full Name</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="Alan Backen" />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Email</UserUpdateLabel>
                <UserUpdateInput
                  type="text"
                  placeholder="annabeck99@gmail.com"
                />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Phone Number</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="+91 7342676438" />
              </UserUpdateItem>
              <UserUpdateItem>
                <UserUpdateLabel>Address</UserUpdateLabel>
                <UserUpdateInput type="text" placeholder="New York | USA" />
              </UserUpdateItem>
            </UserUpdateLeft>
            <UserUpdateRight>
              <UserUpdateUpload>
                <UserUpdateImg
                  src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
                <UserUpdateFileLabel htmlFor="file">
                  <Publish style={{ cursor: "pointer" }} />
                </UserUpdateFileLabel>
                <UserUpdateFileInput type="file" id="file" />
              </UserUpdateUpload>
              <UserUpdateBotton>Update</UserUpdateBotton>
            </UserUpdateRight>
          </UserUpdateForm>
        </UserUpdate>
      </UserContainer>
    </Container>
  );
}
