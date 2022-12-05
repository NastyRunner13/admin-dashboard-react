import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../DummyData";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Container = styled.div`
  flex: 4;
`;

const ActionButton = styled.button`
  border-radius: 10px;
  padding: 5px 7px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  margin-right: 10px;
`;

export default function Products() {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <ProductContainer>
            <Image src={params.row.img} alt="" />
            {params.row.name}
          </ProductContainer>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <ActionButton>Edit</ActionButton>
            </Link>
            <DeleteOutlineIcon
              onClick={() => {
                handleDelete(params.row.id);
              }}
              style={{ color: "red", cursor: "pointer" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
}
