import styled from "styled-components";

export const InputBox = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  background: #fff;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  padding-left: 0.5rem;
  overflow: hidden;
  font-family: sans-serif;

  .prefix {
    font-weight: 300;
    font-size: 14px;
    color: #999;
  }

  input {
    flex-grow: 1;
    font-size: 14px;
    background: #fff;
    border: none;
    outline: none;
    padding: 0.5rem;
  }

  &:focus-within {
    border: 2px solid rgba(35, 131, 226, 0.28);
  }

  @media (max-width: 1000px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
