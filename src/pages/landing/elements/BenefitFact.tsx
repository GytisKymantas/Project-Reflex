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

interface BenefitFactProps {
  icon: React.ReactNode;
  title: string;
}
export const BenefitFact: React.FC<BenefitFactProps> = ({ icon, title }) => {
  console.log(icon);
  return (
    <ContainerStyled>
      <Container p="44px 35px 0 35px">
        <FlexWrapper>
          <FlexWrapper mt="20px">{icon}</FlexWrapper>
          <Box ml="37px" width="400px">
            <TypographyStyled mb="20px" fs="fs20" color="primary">
              {" "}
              {title}
            </TypographyStyled>{" "}
            <ParagraphStyled fs="fs20" color="primary">
              {" "}
              Etiam semper ipsum et enim interdum sagittis vel et enim. Nam
              lacinia quam at lacus laoreet posuere. Morbi et risus eu diam
              pulvinar interdum id ut mauris.{" "}
            </ParagraphStyled>{" "}
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
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
`;

const ParagraphStyled = styled(Typography)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const ContainerStyled = styled(Container)`
  /* clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%); */
`;
const BoxStyled = styled(Box)``;
