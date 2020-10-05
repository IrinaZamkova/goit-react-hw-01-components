import styled from "styled-components";

const Table = styled.table`
  min-width: 500px;
  max-width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
  box-sizing: border-box;
  border: 1px solid #e6e6e6;
  font-size: 14px;
  box-shadow: 4px 6px 18px -1px rgba(130, 125, 130, 0.64);
`;
Table.thead = styled.thead`
  background-color: #20b0f2;
  color: #fff;
  & th {
    text-transform: uppercase;
    border: 1px solid #e6e6e6;
    height: 30px;
  }
`;

Table.tr = styled.tr`
  vertical-align: center;
  text-align: center;
  &:nth-child(odd) {
    background-color: #e6e6e6;
  }
  &:nth-child(even) {
    background-color: white;
  }
  & td {
    width: 33%;
    height: 30px;
    color: gray;
    text-transform: capitalize;
    border: 1px solid #e6e6e6;
  }
`;

export default Table;
