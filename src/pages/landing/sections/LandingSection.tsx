import React from "react";
import { Box, Typography, Image } from "components";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import styled from "styled-components/macro";
import { Logo } from "assets/svg/Logo";

export const LandingSection: React.FC = () => (
  <SectionWrapperStyled as="section">
    <Box height="100vh" maxWidth="94.5625rem" mx="auto">
      <BackgroundContainer
        position="absolute"
        minHeight="100%"
        minWidth="100%"
        left="0"
      >
        <Image src="office" alt="office" height="100vh" width="100%" />
      </BackgroundContainer>
      <Box pl={{ _: "s0", ltablet: "s210" }}>
        <Box
          pt={{ _: "s180", ltablet: "s65" }}
          textAlign={{ _: "center", ltablet: "left" }}
        >
          <Logo />
        </Box>
        <Box
          width={{ _: "25rem", ltablet: "34.25rem" }}
          mt={{ _: "s120", ltablet: "s180" }}
          mx={{ _: "auto", ltablet: "s0" }}
        >
          <FlexWrapper
            justifyContent="center"
            width={{ _: "23.4375rem", ltablet: "100%" }}
          >
            <Typography
              color="primary"
              type="h1"
              fontFamily="Roboto Slab"
              textAlign={{ _: "center", ltablet: "left" }}
              lineHeight="lh64"
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Typography>
          </FlexWrapper>

          <Box
            mt={{ _: "s40", ltablet: "s0" }}
            textAlign={{ _: "center", ltablet: "left" }}
            width={{ _: "23.4375rem", ltablet: "100%" }}
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
