import { StyleTwoTone } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const Title = styled.span`
  font-size: 32px;
  font-weight: 800;
`;

const NewProductForm = styled.form`
  margin-top: 10px;
`;

const AddProductItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const NewProductLabel = styled.label`
  font-weight: 600;
  margin-bottom: 10px;
`;
const NewProductImgInput = styled.input``;

const NewProductInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const NewProductSelect = styled.select`
  color: gray;
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Option = styled.option``;

const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border-radius: 10px;
  background-color: #8ec3b0;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

export default function NewProduct() {
  return (
    <Container>
      <Title>New Product</Title>
      <NewProductForm>
        <AddProductItem>
          <NewProductLabel>Image</NewProductLabel>
          <NewProductImgInput type="file" id="file" />
        </AddProductItem>
        <AddProductItem>
          <NewProductLabel>Name</NewProductLabel>
          <NewProductInput type="text" placeholder="Apple Airpods" />
        </AddProductItem>
        <AddProductItem>
          <NewProductLabel>Stock</NewProductLabel>
          <NewProductInput type="text" placeholder="123" />
        </AddProductItem>
        <AddProductItem>
          <NewProductLabel>Active</NewProductLabel>
          <NewProductSelect name="active" id="active">
            <Option value="yes">Yes</Option>
            <Option value="no">No</Option>
          </NewProductSelect>
        </AddProductItem>
        <Button>Create</Button>
      </NewProductForm>
    </Container>
  );
}
