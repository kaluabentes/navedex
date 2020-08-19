import styled from "styled-components";

export const Container = styled.div`
  width: 592px;
  padding: 32px;
`;

export const Text = styled.p`
  margin: 0 0 34px 0;
`;

export const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  & button:first-of-type {
    margin-right: 24px;
  }
`;
