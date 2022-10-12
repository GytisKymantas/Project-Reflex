import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { theme } from "styles/theme";
import { zIndex } from "styled-system";
import { PeopleIcon } from "assets/svg/PeopleIcon";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { StackIcon } from "assets/svg/StackIcon";

export const BenefitFact = () => {
  return (
    <ContainerStyled>
      <Container p="44px 35px 0 35px">
        <FlexWrapper>
          <FlexWrapper>
            <StackIcon />
          </FlexWrapper>
          <Box ml="37px" width="400px">
            <TypographyStyled mb="20px" fs="fs20" color="primary">
              {" "}
              Duis dapibus interdum auctor{" "}
            </TypographyStyled>{" "}
            <Typography fs="fs20" color="secondary">
              {" "}
              Etiam semper ipsum et enim interdum sagittis vel et enim. Nam
              lacinia quam at lacus laoreet posuere. Morbi et risus eu diam
              pulvinar interdum id ut mauris.{" "}
            </Typography>{" "}
          </Box>
        </FlexWrapper>
      </Container>
    </ContainerStyled>
  );
};
const ListContainer = styled(Box)`
  & li {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const TypographyStyled = styled(Typography)`
  text-transform: uppercase;
`;

const ContainerStyled = styled(Container)`
  /* clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%); */
`;
const BoxStyled = styled(Box)``;
