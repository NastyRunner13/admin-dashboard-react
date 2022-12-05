import React, { useState } from "react";
import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { userRows } from "../DummyData";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 4;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const ActionButton = styled.button`
  border-radius: 10px;
  padding: 5px 7px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 120 },
    {
      field: "user",
      headerName: "Username",
      width: 250,
      renderCell: (params) => {
        return (
          <UserContainer>
            <Avatar src={params.row.avatar} alt="" />
            {params.row.userName}
          </UserContainer>
        );
      },
    },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
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
