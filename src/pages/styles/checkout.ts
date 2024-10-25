import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    text-align: center;
  }

  img {
    width: 50%;
  }

  @media (max-width: 756px) {
    width: 90%;
    img {
      width: 100%;
    }

    h1 {
      width: 100%;
    }
  }
`;
