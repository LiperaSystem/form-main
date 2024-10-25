import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: #fbf8f2;
  color: #fe1c08;
  padding: 2rem 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.125rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Logo = styled.div`
  img {
    width: 350px;
    height: auto;
  }
  cursor: pointer;

  @media screen and (max-width: 768px) {
    img {
      width: 250px;
    }
  }
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 20px;

    @media screen and (max-width: 768px) {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      background-color: #fbf8f2;
      width: 100%;
      padding: 1rem;
      z-index: 1;
    }
  }

  li {
    a {
      text-decoration: none;
      color: inherit;
      &:hover {
        color: #5c5c5c;
      }
    }

    @media screen and (max-width: 768px) {
      a {
        font-size: 1.25rem;
      }
    }
  }
`;
