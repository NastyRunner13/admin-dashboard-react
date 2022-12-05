import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 800;
`;

const NewUserForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const FormItem = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
`;

const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 600;
  color: grayl;
`;

const FormInput = styled.input`
  height: 50px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
`;

const NewUserGender = styled.div``;

const GenderInput = styled.input`
  margin-top: 15px;
`;

const GenderLabel = styled.label`
  margin: 10px;
  font-size: 18px;
  color: #555;
`;

const FormSelect = styled.select`
  height: 50px;
  border-radius: 5px;
  border: 1px solid gray;
`;

const Option = styled.option``;

const NewUserButton = styled.button`
  color: white;
  background-color: #8ec3b0;
  width: 200px;
  font-weight: 600;
  border-radius: 10px;
  padding: 7px 10px;
  margin-top: 30px;
`;

export default function NewUser() {
  return (
    <Container>
      <Title>New User</Title>
      <NewUserForm>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormInput type="text" placeholder="john" />
        </FormItem>
        <FormItem>
          <FormLabel>Full Name</FormLabel>
          <FormInput type="text" placeholder="John Smith" />
        </FormItem>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormInput type="email" placeholder="john@gmail.com" />
        </FormItem>
        <FormItem>
          <FormLabel>Password</FormLabel>
          <FormInput type="password" placeholder="password" />
        </FormItem>
        <FormItem>
          <FormLabel>Phone Number</FormLabel>
          <FormInput type="text" placeholder="+91 342784184" />
        </FormItem>
        <FormItem>
          <FormLabel>Address</FormLabel>
          <FormInput type="text" placeholder="New York | USA" />
        </FormItem>
        <FormItem>
          <FormLabel>Gender</FormLabel>
          <NewUserGender>
            <GenderInput type="radio" name="gender" id="male" value="male" />
            <GenderLabel htmlFor="male">Male</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              id="female"
              value="female"
            />
            <GenderLabel htmlFor="female">Female</GenderLabel>
            <GenderInput
              type="radio"
              name="gender"
              id="others"
              value="others"
            />
            <GenderLabel htmlFor="others">Other</GenderLabel>
          </NewUserGender>
        </FormItem>
        <FormItem>
          <FormLabel>Active</FormLabel>
          <FormSelect name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </FormSelect>
        </FormItem>
        <NewUserButton>Create</NewUserButton>
      </NewUserForm>
    </Container>
  );
}
