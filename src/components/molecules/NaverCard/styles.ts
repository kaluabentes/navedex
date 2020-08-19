import styled, { css } from "styled-components";
import { glow } from "styles/animations";

export const Container = styled.div``;

export const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export const Name = styled.h4`
  margin: 0 0 10px 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const Role = styled.p`
  margin: 0 0 20px 0;
`;

const commonLoader = css`
  background: rgba(0, 0, 0, 0.1);
  animation: ${glow} 1.5s linear infinite;
`;

export const ImageLoader = styled.div`
  height: 276px;
  width: 100%;
  margin: 0 0 20px 0;
  ${commonLoader}
`;

export const NameLoader = styled.div`
  height: 15px;
  width: 30%;
  margin: 0 0 10px 0;
  ${commonLoader}
`;

export const RoleLoader = styled.div`
  height: 15px;
  width: 60%;
  ${commonLoader}
`;
