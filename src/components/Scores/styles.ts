import styled from "styled-components";
import { Radio } from "@mui/material";

export const StyledRadio = styled(Radio)`
  && {
    width: 100%;
    height: 60%;
    padding: 0;
    margin: 0;

    .MuiIconButton-root {
      padding: 0;
    }

    .MuiRadio-root {
      color: transparent;
    }
  }
`;

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 0.5rem;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const ScoreDiv = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  margin: 0;
  flex-direction: column;
  border-radius: 0.2rem;
  color: white;
`;
