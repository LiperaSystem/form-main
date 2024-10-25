import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 50%;
  height: 50%;
  border-radius: 0.5rem;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: #fff;
  box-shadow: 0 0 10px #ddd;

  @media (max-width: 768px) {
    width: 90%;
    height: 100%;
    flex-direction: column;

    img {
      max-height: 90%;
      max-width: 90%;
    }
  }

  img {
    max-width: 400px;
    max-height: 400px;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
