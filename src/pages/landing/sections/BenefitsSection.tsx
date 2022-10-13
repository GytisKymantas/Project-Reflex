import React from "react";
import { Box, Typography, Image } from "components";
import styled from "styled-components/macro";
import { Container } from "components/wrappers/Container";

import { BenefitFact } from "../elements/BenefitFact";
import { GridWrapper } from "components/wrappers/GridWrapper";
import { StackIcon } from "assets/svg/StackIcon";
import { ChipIcon } from "assets/svg/ChipIcon";
import { GraphIcon } from "assets/svg/GraphIcon";
import { useQuery } from "styles/breakpoints";
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
  const { isTablet } = useQuery();
  return (
    <SectionWrapperStyled
      pb={{ _: "s0", ltablet: "s200" }}
      height={{ _: "1450px", ltablet: "100vh" }}
    >
      <BackgroundContainer position="absolute" minHeight="100%" minWidth="100%">
        {isTablet ? (
          <Image src="teamMobile" alt="team" height="1450px" width="100%" />
        ) : (
          <Image src="team" alt="team" height="100vh" width="100%" />
        )}
      </BackgroundContainer>
      <ContainerStlyed>
        <Box
          pt={{ _: "80px", ltablet: "s115" }}
          mb={{ _: "s30", ltablet: "s120" }}
          textAlign={{ _: "center", ltablet: "left" }}
        >
          <TypographyStyled
            lineHeight={{ _: "64px", ltablet: "84px" }}
            color="primary"
          >
            {" "}
            Our benefits{" "}
          </TypographyStyled>

          <Typography
            color="primary"
            fontSize={{ _: "24px", ltablet: "fs28" }}
            lineHeight="lh38"
            type="span"
          >
            Suspendisse porttitor ex a mollis consectetur. Donec egestas, libero
            sed viverra sodales, dui eros pulvinar diam, at mollis libero purus
            lobortis mauris.
          </Typography>
        </Box>
        <GridWrapper
          gridTemplateColumns={{ _: "1fr", ltablet: "1fr 1fr" }}
          mb={{ _: "0", ltablet: "s200" }}
          gap="s135"
        >
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
  font-weight: 400;
  font-size: 64px;
  margin-bottom: 16px;
`;

const BackgroundContainer = styled(Box)`
  z-index: -1;
`;
