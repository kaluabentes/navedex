import styled from "styled-components";
import IconButton from "components/atoms/IconButton";

export const Container = styled.div`
  width: 100%;
  max-width: 592px;
  margin: 0 auto;
  padding-top: 16px;
`;

export const BackButton = styled(IconButton)`
  margin-right: 22px;
`;

export const Header = styled.header`
  display: flex;
  margin: 0 0 32px 0;
  align-items: center;
`;
