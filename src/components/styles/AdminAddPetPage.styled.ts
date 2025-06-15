import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 0 16px;
`;

export const BackButton = styled.button`
  background: #ffffff;
  border: 1px solid #ced4da;
  color: #495057;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  margin-bottom: 24px;
  cursor: pointer;
  &:hover {
    background: #f8f9fa;
    border-color: #adb5bd;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  text-align: center;
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    color: #212529;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 8px 12px;
    font-size: 14px;
    border: 1px solid #ced4da;
    border-radius: 4px;
    &:focus {
      outline: none;
      border-color: #66afe9;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

export const CheckboxField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  input {
    margin-right: 8px;
  }

  span {
    font-size: 14px;
    color: #212529;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: #007bff;
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background: #6c757d;
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;
