import styled from "styled-components";

const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  width: 300px;
  height: auto;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

List.li = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid gray;
  box-shadow: 4px 6px 18px -1px rgba(130, 125, 130, 0.64);
  font-size: 16px;
  font-weight: 700;
  color: black;
  &:last-child {
    margin-bottom: 0px;
  }
`;

List.span = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? `green` : "red")};
  margin-left: 15px;
`;

List.img = styled.img`
  display: block;
  margin: 10px;
  border-radius: 10%;
`;

List.p = styled.p`
  display: block;
`;
export default List;
