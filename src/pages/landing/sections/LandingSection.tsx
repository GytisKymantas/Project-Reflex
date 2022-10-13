import React from "react";
import { Box, Typography, Image } from "components";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import styled from "styled-components/macro";
import { Logo } from "assets/svg/Logo";

export const LandingSection: React.FC = () => {
  return (
    <SectionWrapperStyled as="section" height="100vh">
      <BackgroundContainer position="absolute" minHeight="100%" minWidth="100%">
        <Image src="office" alt="office" height="100vh" width="100%" />
      </BackgroundContainer>
      <Box pl={{ _: "0px", ltablet: "s210" }}>
        <Box
          pt={{ _: "100px", ltablet: "s60" }}
          textAlign={{ _: "center", ltablet: "left" }}
        >
          <Logo />
        </Box>
        <Box
          width={{ _: "400px", ltablet: "548px" }}
          mt={{ _: "90px", ltablet: "180px" }}
          mx={{ _: "auto", ltablet: "0" }}
        >
          <FlexWrapper
            justifyContent="center"
            width={{ _: "375px", ltablet: "100%" }}
          >
            <Typography
              color="primary"
              type="h1"
              fontFamily="Roboto Slab"
              textAlign={{ _: "center", ltablet: "left" }}
              lineHeight={{ _: "30px", ltablet: "63px" }}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </Typography>
          </FlexWrapper>

          <Box
            mt={{ _: "40px", ltablet: "0" }}
            textAlign={{ _: "center", ltablet: "left" }}
            width={{ _: "375px", ltablet: "100%" }}
          >
            <Typography
              color="primary"
              fontSize={{ _: "22px", ltablet: "28px" }}
              lineHeight={{ _: "20px", ltablet: "38px" }}
              fontFamily="Open Sans"
              type="p"
            >
              Aenean consectetur gravida sem sed pharetra. Vestibulum non
              facilisis lacus, id ultrices sem.
            </Typography>
          </Box>
        </Box>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: rgba(0, 29, 31, 0.75);
`;

const BackgroundContainer = styled(Box)`
  z-index: -1;
`;
