import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Nav = () => {
  return (
    <div>
      <StyledList>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
      </StyledList>
    </div>
  );
};

export default Nav;
