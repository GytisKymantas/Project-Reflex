import React from "react";
import { Box, Typography, Image, FlexWrapper } from "components";
import styled from "styled-components/macro";
import { Logo } from "assets/svg/Logo";

export const LandingSection: React.FC = () => (
  <SectionWrapperStyled as="section">
    <Box height="100vh" maxWidth="1513px" mx="auto">
      <BackgroundContainer
        position="absolute"
        minHeight="100%"
        minWidth="100%"
        left="0"
      >
        <Image src="office" alt="office" height="100vh" width="100%" />
      </BackgroundContainer>
      <Box pl={{ _: "0", ltablet: "200px" }}>
        <Box
          pt="64px"
          mb={{ _: "80px", ltablet: "177.99px" }}
          textAlign={{ _: "center", ltablet: "left" }}
        >
          <Logo />
        </Box>
        <Box
          width={{ _: "100%", ltablet: "548px" }}
          mx={{ _: "auto", ltablet: "s0" }}
        >
          <FlexWrapper justifyContent="center" width="100%">
            <Typography
              color="primary"
              fontFamily="Roboto Slab"
              textAlign={{ _: "center", ltablet: "left" }}
              lineHeight="lh63p3"
              fontSize="fs48"
              fontWeight="fw400"
              mb="10px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </FlexWrapper>

          <Box
            mt={{ _: "40px", ltablet: "0" }}
            textAlign={{ _: "center", ltablet: "left" }}
            width="100%"
          >
            <Typography
              color="primary"
              fontSize={{ _: "fs22", ltablet: "fs28" }}
              lineHeight={{ _: "lh44", ltablet: "lh38" }}
              fontFamily="Open Sans"
            >
              Aenean consectetur gravida sem sed pharetra. Vestibulum non
              facilisis lacus, id ultrices sem.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </SectionWrapperStyled>
);

const SectionWrapperStyled = styled(Box)`
  background: rgba(0, 29, 31, 0.75);
`;

const BackgroundContainer = styled(Box)`
  z-index: -1;
`;
