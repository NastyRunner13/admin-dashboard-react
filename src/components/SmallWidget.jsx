import React from "react";
import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul``;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-weight: 600;
`;

const JobTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #def5e5;
  color: gray;
`;

export default function SmallWidget() {
  return (
    <Container>
      <Title>New Joined Members</Title>
      <List>
        <ListItem>
          <Image src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <User>
            <UserName>Allen Keller</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <VisibilityIcon style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <User>
            <UserName>Allen Keller</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <VisibilityIcon style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <User>
            <UserName>Allen Keller</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <VisibilityIcon style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <User>
            <UserName>Allen Keller</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <VisibilityIcon style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Image src="https://images.unsplash.com/photo-1525517450344-d08c6a528e3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <User>
            <UserName>Allen Keller</UserName>
            <JobTitle>Software Engineer</JobTitle>
          </User>
          <Button>
            <VisibilityIcon style={{ fontSize: "16px", marginRight: "5px" }} />
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
}
