import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px); /* You can adjust the initial position */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const WarningMessage = styled.p`
  color: red; /* Text color for the warning message */
  font-size: 16px; /* Adjust the font size as needed */
  margin-top: 10px; /* Adjust the top margin as needed */
  font-weight: 600;
`;

export const Container = styled.div`
  font-family: "Inter", sans-serif;
  width: 100%;
  height: 100%;
  background-color: #fbf8f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const InfoText = styled.h4`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  max-width: 75%;
  margin-bottom: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 50%;
  padding: 20px;
  height: 100%;
  background-color: #fbf8f2;
  border-radius: 8px;
  box-shadow: 0 0 10px #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 1.5rem;
  text-align: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;

  @media (max-width: 1310px) {
    max-width: 80%;
  }

  @media (max-width: 870px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
  }
`;
