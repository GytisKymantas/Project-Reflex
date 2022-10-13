import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { zIndex } from "styled-system";
import { StarIcon } from "assets/svg/StarIcon";
import { theme } from "styles/theme";
import { BenefitFact } from "../elements/BenefitFact";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { GridWrapper } from "components/wrappers/GridWrapper";

const STARS = ["1", "2", "3", "4", "5"];
export const TestimonialsSection = () => {
  return (
    <SectionWrapperStyled>
      <ContainerStlyed>
        <Box pt="112px" mb="123px">
          <TypographyStyled color="primary"> Testimonials </TypographyStyled>
        </Box>

        <FlexWrapper>
          <Box mr="105px" width="100%">
            <Author color="primary"> Susana D. </Author>
            <Profession color="primary">
              {" "}
              Marketing and Communication{" "}
            </Profession>
          </Box>
          <Box>
            <ParagraphStyled color="primary" pb="13px">
              {" "}
              “Nunc a condimentum lorem. Nulla quis nisi facilisis, vulputate
              eros vitae, aliquam mi. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Cras
              interdum sed nisl quis sollicitudin. Pellentesque sit amet blandit
              lectus, et malesuada libero.”
            </ParagraphStyled>
            <Box pb="156px">
              {STARS.map((star) => (
                <StarIcon key={star} />
              ))}
            </Box>
          </Box>
        </FlexWrapper>
      </ContainerStlyed>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: url();
  background-position: center;
  background: ${theme.colors.Dark};
`;

const Author = styled(Typography)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const Profession = styled(Typography)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 19px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;

const TypographyStyled = styled(Typography)`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
  display: flex;
  align-items: center;
`;

const ParagraphStyled = styled(Typography)`
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const BoxStyled = styled(Box)``;
