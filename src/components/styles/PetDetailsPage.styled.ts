import styled from "styled-components";

export const Maindiv = styled.div`
  box-sizing: border-box;
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px;
`;

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

export const Smallcontainer = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 320px;
  height: 320px;
  background: #edf2f7;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4a5568;
  font-size: 80px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 20px;
  letter-spacing: -0.5px;

  @media (max-width: 480px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const Badge = styled.span`
  background: #4a6fa5;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 30px;
  display: inline-block;
`;

export const PriceBox = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  div {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;
    text-align: center;
    flex: 1;
    min-width: 120px;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-4px);
    }

    h4 {
      margin: 4px 0;
      font-size: 18px;
    }

    &.usd {
      color: green;
    }

    &.gel {
      color: crimson;
    }

    &.stock {
      color: #333;
    }
  }
`;

export const Description = styled.p`
  background: #f8f9fa;
  padding: 28px;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  line-height: 1.5;
  color: #444;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 32px;

  button {
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .edit {
    background: #3498db;
    color: white;

    &:hover {
      background: #2c80ba;
      transform: scale(1.05);
    }
  }

  .delete {
    background: #e74c3c;
    color: white;

    &:hover {
      background: #c0392b;
      transform: scale(1.05);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
    button {
      width: 100%;
    }
  }
`;
