import styled, { css } from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  opacity: 0;
  visibility: hidden;

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

export const Content = styled.div<{ isOpen: boolean }>`
  background: white;
  display: inline-block;
  transition: 1s;
  opacity: 0;
  transform: translateY(100px);

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      transform: translateY(0);
    `}
`;
