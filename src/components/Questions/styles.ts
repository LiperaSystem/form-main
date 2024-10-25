import styled from "styled-components";

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const QuestionText = styled.h3`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  grid-area: question;

  span {
    font-weight: 400;
    margin-top: 0.5rem;
  }
`;
