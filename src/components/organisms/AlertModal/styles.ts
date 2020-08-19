import styled from "styled-components";
import IconButton from "components/atoms/IconButton";

export const Container = styled.div`
  width: 592px;
  padding: 30px;
  position: relative;
`;

export const Text = styled.p`
  margin: 0;
`;

export const CloseButton = styled(IconButton)`
  margin: 0;
  position: absolute;
  top: 30px;
  right: 30px;
`;
