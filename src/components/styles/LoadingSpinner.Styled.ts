import styled from "styled-components";

export const SpinnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid rgba(0, 0, 0, 0.1);
  border-top-color: #007bff;
  border-radius: 50%;
  animation: spin 0.9s linear infinite;
  margin-bottom: 16px;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SpinnerText = styled.p`
  font-size: 18px;
  color: #333;
`;
