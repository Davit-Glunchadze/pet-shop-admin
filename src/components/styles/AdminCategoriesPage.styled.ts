import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 32px;
`;

export const Header = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

export const AddButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  justify-content: center;
  margin: 0 auto;
  max-width: 1120px;
`;

export const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  width: 280px;
  margin-top: 20px;
`;

export const CategoryName = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const Meta = styled.p`
  font-size: 13px;
  color: #777;
  margin-bottom: 12px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const EditButton = styled.button`
  background-color: #e5e7eb;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #dc2626;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #b91c1c;
  }
`;
