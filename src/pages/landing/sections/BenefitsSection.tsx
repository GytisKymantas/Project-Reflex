import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { zIndex } from "styled-system";
import { BenefitFact } from "../elements/BenefitFact";
import { GridWrapper } from "components/wrappers/GridWrapper";

export const BenefitsSection = () => {
  return (
    <SectionWrapperStyled>
      <ContainerStlyed>
        <Box mt="fs180" mb="123px">
          <Typography color="secondary" type="h1" lineHeight={"63px"}>
            {" "}
            Our benefits{" "}
          </Typography>
          <Typography
            color="secondary"
            fontSize="fs28"
            lineHeight="lh38"
            type="span"
          >
            Suspendisse porttitor ex a mollis consectetur. Donec egestas, libero
            sed viverra sodales, dui eros pulvinar diam, at mollis libero purus
            lobortis mauris.
          </Typography>
        </Box>
        <GridWrapper gridTemplateColumns="1fr 1fr" mb="204px" gap="136px">
          <BenefitFact />
          <BenefitFact />
          <BenefitFact />
          <BenefitFact />
        </GridWrapper>
      </ContainerStlyed>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(SectionWrapper)`
  background: url();
  background-position: center;
  background: gray;
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const BoxStyled = styled(Box)``;
