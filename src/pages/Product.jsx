import { Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../components/Chart";
import { productData } from "../DummyData";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const ProductTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProductTitle = styled.span`
  font-size: 32px;
  font-weight: 800;
  margin-left: 20px;
`;

const ProductAddButton = styled.button`
  background-color: teal;
  color: white;
  border-radius: 10px;
  padding: 5px;
  width: 80px;
  margin-right: 20px;
`;

const ProductTop = styled.div`
  display: flex;
`;

const ProductTopLeft = styled.div`
  flex: 1;
`;

const ProductTopRight = styled.div`
  margin: 20px;
  padding: 20px;
  flex: 1;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

const ProductInfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  object-fit: cover;
`;

const ProductName = styled.span`
  margin-left: 10px;
  font-weight: 600;
`;

const ProductInfoBottom = styled.div`
  margin-top: 10px;
`;

const ProductInfoItem = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

const ProductInfoKey = styled.span`
  font-weight: 600;
`;

const ProductInfoValue = styled.span`
  font-weight: 300;
`;

const ProductBottom = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;

const ProductForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

const ProductFormLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductLabel = styled.label`
  margin-bottom: 10px;
`;

const ProductInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const ProductSelect = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  border-bottom: 1px solid gray;
`;

const Option = styled.option``;

const ProductFormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductUpload = styled.div`
  display: flex;
  align-items: center;
`;

const ProductUploadImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 10px;
`;

const ProductUploadLabel = styled.label``;

const ProductUploadInput = styled.input`
  display: none;
`;

const ProductButton = styled.button`
  padding: 5px;
  border-radius: 10px;
  background-color: #8ec3b0;
  color: white;
  font-weight: 600;
`;

export default function Product() {
  return (
    <Container>
      <ProductTitleContainer>
        <ProductTitle>Product</ProductTitle>
        <Link to="/newProduct">
          <ProductAddButton>Create</ProductAddButton>
        </Link>
      </ProductTitleContainer>
      <ProductTop>
        <ProductTopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </ProductTopLeft>
        <ProductTopRight>
          <ProductInfoTop>
            <ProductImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nB-FwpFc6v3ZsmpSDjxSvFo4eKXk6xbpmQ&usqp=CAU" />
            <ProductName>Apple Airpods</ProductName>
          </ProductInfoTop>
          <ProductInfoBottom>
            <ProductInfoItem>
              <ProductInfoKey>id:</ProductInfoKey>
              <ProductInfoValue>123</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>Sales:</ProductInfoKey>
              <ProductInfoValue>2433</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>active:</ProductInfoKey>
              <ProductInfoValue>yes</ProductInfoValue>
            </ProductInfoItem>
            <ProductInfoItem>
              <ProductInfoKey>in stock:</ProductInfoKey>
              <ProductInfoValue>no</ProductInfoValue>
            </ProductInfoItem>
          </ProductInfoBottom>
        </ProductTopRight>
      </ProductTop>
      <ProductBottom>
        <ProductForm>
          <ProductFormLeft>
            <ProductLabel>Product Name</ProductLabel>
            <ProductInput type="text" placeholder="Apple Airpods" />
            <ProductLabel>In Stock</ProductLabel>
            <ProductSelect name="inStock" id="inStock">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </ProductSelect>
            <ProductLabel>Active</ProductLabel>
            <ProductSelect name="active" id="active">
              <Option value="yes">Yes</Option>
              <Option value="no">No</Option>
            </ProductSelect>
          </ProductFormLeft>
          <ProductFormRight>
            <ProductUpload>
              <ProductUploadImage
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5nB-FwpFc6v3ZsmpSDjxSvFo4eKXk6xbpmQ&usqp=CAU"
                alt=""
              />
              <ProductUploadLabel htmlFor="file">
                <Publish style={{ cursor: "pointer" }} />
              </ProductUploadLabel>
              <ProductUploadInput type="file" id="file" />
            </ProductUpload>
            <ProductButton>Update</ProductButton>
          </ProductFormRight>
        </ProductForm>
      </ProductBottom>
    </Container>
  );
}
