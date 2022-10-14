import styled from "styled-components/macro";
import { flexbox } from "styled-system";
import { Box } from "components";

interface FlexWrapperProps {
  alignItems?: string;
  flexWrap?: string;
  flexDirection?: string;
  justifyContent?: string;
  gap?:string;
}
export const FlexWrapper = styled(Box)<FlexWrapperProps>`
  display: flex;
  flex-wrap: ${({ flexWrap }) => flexWrap || ""};
  flex-direction: ${({ flexDirection }) => flexDirection || ""};

  gap: ${({ gap }) => gap};

  && {
    ${flexbox}
  }
`;