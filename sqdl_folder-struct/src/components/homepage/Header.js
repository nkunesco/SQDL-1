import React from "react";
import styled from "styled-components";
import bg from "../img/bg3.svg";
import HeaderContent from "./HeaderContent";

function Header() {
  return (
    <HeaderStyled>
      <div className="header-content">
        <HeaderContent />
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  min-height: 100vh;
  width: 100%;
  position: relative;
  bottom: 5rem;
  z-index: -1;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 100%;
  .header-content {
    padding: 0 18rem;
    @media screen and (max-width: 1347px) {
      padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px) {
      padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px) {
      padding: 5rem 4rem;
    }
  }
`;

export default Header;
