import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.35);
  }
`;

export const ImageWrapper = styled.div`
  background-color: #f2f6fb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 160px;
  width: 100%;
  margin-bottom: 16px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  font-size: 19.2px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const Badge = styled.span`
  background-color: #4b69c6;
  color: #fff;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 20px;
  display: inline-block;
  width: fit-content;
  margin: 10px 0 10px;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 4px 0;

  span:first-child {
    color: green;
    font-weight: 500;
  }

  span:last-child {
    color: crimson;
    font-weight: 500;
  }
`;

export const Description = styled.p`
  font-size: 13.6px;
  color: #555;
  margin: 12px 0;
  line-height: 1.4;
`;

export const Tag = styled.span`
  background-color: #ffe7c2;
  color: #c27600;
  padding: 4px 10px;
  font-size: 12px;
  border-radius: 6px;
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 12px;
`;

export const Button = styled.button<{ $colorProps?: boolean }>`
  flex: 1;
  padding: 10px 0;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  color: white;
  background-color: ${(props) => (props.$colorProps ? "#e74c3c" : "#3498db")};

  &:hover {
    opacity: 0.9;
  }
`;
