import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { zIndex } from "styled-system";

export const LandingSection = () => {
  return (
    <SectionWrapperStyled as="section" pb="362px">
      <BackgroundContainer position="absolute">
        <Image src="office" alt={"fds"} />
      </BackgroundContainer>
      <ContainerStlyed className="ok">
        <BoxStyled pt="62px">
          <Logo />
        </BoxStyled>
        <Box mt="fs180" width="548px">
          <Typography
            color="primary"
            type="h1"
            fontFamily="Roboto Slab"
            lineHeight={"63px"}
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </Typography>
          <Typography
            color="primary"
            fontSize="fs28"
            lineHeight="lh38"
            fontFamily="Open Sans"
            type="span"
          >
            Aenean consectetur gravida sem sed pharetra. Vestibulum non
            facilisis lacus, id ultrices sem.
          </Typography>
        </Box>
      </ContainerStlyed>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  /* background: gray; */
  background: rgba(0, 29, 31, 0.75);
`;

const ContainerStlyed = styled(Container)``;
const BoxStyled = styled(Box)``;

const BackgroundContainer = styled(Box)`
  z-index: -1;
`;
