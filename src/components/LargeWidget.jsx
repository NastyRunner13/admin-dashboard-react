import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 13px -3px rgba(0, 0, 0, 0.75);
  padding: 20px;
  border-radius: 10px;
`;

const Title = styled.span`
  font-weight: 600;
  font-size: 22px;
`;

const Table = styled.table`
  width: 100%;
  margin: 20px;
`;

const TableRow = styled.tr`
  height: 55px;
`;

const TableTh = styled.th`
  text-align: left;
`;

const UserTd = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Image = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.span``;

const DateTd = styled.td``;

const AmountTd = styled.td``;

const StatusTd = styled.td``;

const Button = styled.button`
  padding: 5px 7px;
  border-radius: 10px;
  color: ${(props) => {
    if (props.type === "approved") {
      return "#3BB077";
    } else if (props.type === "declined") {
      return "#D95087";
    } else {
      return "#2A7ADE";
    }
  }};
  background-color: ${(props) => {
    if (props.type === "approved") {
      return "#E5FAF2";
    } else if (props.type === "declined") {
      return "#FFF0F1";
    } else {
      return "#EBF1FE";
    }
  }};
`;

export default function LargeWidget() {
  return (
    <Container>
      <Title>Latest Transactions</Title>
      <Table>
        <TableRow>
          <TableTh>Customer</TableTh>
          <TableTh>Date</TableTh>
          <TableTh>Amount</TableTh>
          <TableTh>Status</TableTh>
        </TableRow>
        <TableRow>
          <UserTd>
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Name>Susan Carol</Name>
          </UserTd>
          <DateTd>29 NOV 2022</DateTd>
          <AmountTd>$122.00</AmountTd>
          <StatusTd>
            <Button type="approved">Approved</Button>
          </StatusTd>
        </TableRow>
        <TableRow>
          <UserTd>
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Name>Susan Carol</Name>
          </UserTd>
          <DateTd>29 NOV 2022</DateTd>
          <AmountTd>$122.00</AmountTd>
          <StatusTd>
            <Button type="declined">Declined</Button>
          </StatusTd>
        </TableRow>
        <TableRow>
          <UserTd>
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Name>Susan Carol</Name>
          </UserTd>
          <DateTd>29 NOV 2022</DateTd>
          <AmountTd>$122.00</AmountTd>
          <StatusTd>
            <Button type="approved">Approved</Button>
          </StatusTd>
        </TableRow>
        <TableRow>
          <UserTd>
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Name>Susan Carol</Name>
          </UserTd>
          <DateTd>29 NOV 2022</DateTd>
          <AmountTd>$122.00</AmountTd>
          <StatusTd>
            <Button type="pending">Pending</Button>
          </StatusTd>
        </TableRow>
        <TableRow>
          <UserTd>
            <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
            <Name>Susan Carol</Name>
          </UserTd>
          <DateTd>29 NOV 2022</DateTd>
          <AmountTd>$122.00</AmountTd>
          <StatusTd>
            <Button type="approved">Approved</Button>
          </StatusTd>
        </TableRow>
      </Table>
    </Container>
  );
}
