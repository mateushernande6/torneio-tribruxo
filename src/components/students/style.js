import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyButton = styled.button`
  background-color: yellow;
  padding: 0.3rem;
  width: 120px;
  border:none;
  border-radius: 20px;
  cursor: pointer;
  &:focus{
      display:none;
  }
  font-weight: 500;
`;
