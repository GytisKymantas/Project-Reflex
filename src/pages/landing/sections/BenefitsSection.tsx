import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { zIndex } from "styled-system";
import { BenefitFact } from "../elements/BenefitFact";
import { GridWrapper } from "components/wrappers/GridWrapper";
import { StackIcon } from "assets/svg/StackIcon";
import { ChipIcon } from "assets/svg/ChipIcon";
import { GraphIcon } from "assets/svg/GraphIcon";
import { TimeIcon } from "assets/svg/TimeIcon";

const ICONS = [
  {
    icon: <GraphIcon />,
    title: "Duis dapibus interdum auctor",
    id: 1,
  },
  {
    icon: <TimeIcon />,
    title: "Aenean ac turpis blandit",
    id: 2,
  },
  {
    icon: <StackIcon />,
    title: "Nulla quis nisi facilisis",
    id: 3,
  },
  {
    icon: <ChipIcon />,
    title: "Aenean faucibus aliquet erat",
    id: 4,
  },
];

export const BenefitsSection = () => {
  return (
    <SectionWrapperStyled pb="204px">
      <BackgroundContainer position="absolute" width="100%">
        <Image src="team" alt={"team"} width="100%" height="1500px" />
      </BackgroundContainer>
      <ContainerStlyed>
        <Box pt="112px" mb="123px">
          <TypographyStyled color="primary"> Our benefits </TypographyStyled>
          <Typography
            color="primary"
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
          {ICONS.map(({ icon, id, title }) => (
            <BenefitFact icon={icon} key={id} title={title} />
          ))}{" "}
        </GridWrapper>
      </ContainerStlyed>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: rgba(0, 29, 31, 0.75);
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const TypographyStyled = styled(Typography)`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
  margin-bottom: 16px;
`;

const BackgroundContainer = styled(Box)`
  z-index: -1;
`;
