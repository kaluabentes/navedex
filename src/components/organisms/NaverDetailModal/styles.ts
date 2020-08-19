import styled from "styled-components";
import IconButton from "components/atoms/IconButton";

export const Container = styled.div`
  width: 1006px;
  display: flex;
  position: relative;
`;

export const Image = styled.img`
  width: 50%;
`;

export const Content = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
`;

export const Role = styled.p`
  margin: 0 0 24px 0;
`;

export const FieldTitle = styled.p`
  margin: 0 0 10px 0;
  font-weight: 600;
`;

export const FieldValue = styled.p`
  margin: 0 0 24px 0;
`;

export const Actions = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
`;

export const CloseButton = styled(IconButton)`
  margin: 0;
  position: absolute;
  top: 21px;
  right: 21px;
`;
