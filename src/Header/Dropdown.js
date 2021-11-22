import { DropdownItems } from "./DropdownItems";
import styled from "styled-components";

const Dropdown = ({ dropdown, setDropdown }) => {
  return (
    <Container>
      {DropdownItems?.map((props, i) => (
        <List
          key={i}
          onClick={() => {
            console.log(dropdown);
            setDropdown(false);
          }}
        >
          {props.title}
        </List>
      ))}
    </Container>
  );
};

export default Dropdown;

const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0;

  :hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 200vh;
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
