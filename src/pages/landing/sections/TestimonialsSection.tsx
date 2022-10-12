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

export const TestimonialsSection = () => {
  return (
    <SectionWrapperStyled>
      <ContainerStlyed>
        <Box mt="112px" mb="123px">
          <Typography color="secondary" type="h1" lineHeight={"63px"}>
            {" "}
            Testimonials{" "}
          </Typography>
        </Box>

        <FlexWrapper mb="156px">
          <Box mr="105px" width="100%">
            <Typography color="secondary"> Susana D. </Typography>
            <Typography color="secondary">
              {" "}
              Marketing and Communication{" "}
            </Typography>
          </Box>
          <Box>
            <Typography color="secondary">
              {" "}
              “Nunc a condimentum lorem. Nulla quis nisi facilisis, vulputate
              eros vitae, aliquam mi. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Cras
              interdum sed nisl quis sollicitudin. Pellentesque sit amet blandit
              lectus, et malesuada libero.”
            </Typography>
            <Box>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </Box>
          </Box>
        </FlexWrapper>
      </ContainerStlyed>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(SectionWrapper)`
  background: url();
  background-position: center;
  background: ${theme.colors.Dark};
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const BoxStyled = styled(Box)``;
