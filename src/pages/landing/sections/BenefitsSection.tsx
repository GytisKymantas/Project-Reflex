import React from "react";
import { Box, Typography, Image } from "components";
import styled from "styled-components/macro";

import { BenefitFact } from "../elements/BenefitFact";
import { useQuery } from "styles/breakpoints";
import { ICONS } from "constants/constants";
import { GridWrapper } from "components/wrappers/GridWrapper";

export const BenefitsSection: React.FC = () => {
  const { isLgDesktop } = useQuery();
  return (
    <BoxContainer>
      <Box
        pb={{ _: "s0", ltablet: "s200" }}
        height={{ _: "100%", desktop: "60.4375rem" }}
        maxWidth="94.5rem"
        mx="auto"
      >
        <Box
          position="absolute"
          minHeight="100%"
          zIndex="base"
          left="0"
          width="100%"
        >
          {isLgDesktop ? (
            <Image
              src="teamMobile"
              alt="team"
              height="90.625rem"
              width="100%"
            />
          ) : (
            <Image src="team" alt="team" height="60.4375rem" width="100%" />
          )}
        </Box>
        <Box>
          <Box
            pt={{ _: "s80", ltablet: "s115" }}
            mb={{ _: "s30", ltablet: "s80" }}
            ml={{ _: "s0", desktop: "s200" }}
            textAlign={{ _: "center", desktop: "left" }}
            width={{ _: "69.5rem", desktop: "69.5rem" }}
          >
            <Typography
              lineHeight={{ _: "lh64", ltablet: "lh84" }}
              color="primary"
              mb="16px"
              fontSize="fs64"
              fontWeight="fw400"
            >
              {" "}
              Our benefits{" "}
            </Typography>

            <Typography
              color="primary"
              fontSize="fs20"
              lineHeight="lh38"
              type="span"
            >
              Suspendisse porttitor ex a mollis consectetur. Donec egestas,
              libero sed viverra sodales, dui eros pulvinar diam, at mollis
              libero purus lobortis mauris.
            </Typography>
          </Box>
          <Box maxWidth="1180px" mx="auto">
            <GridWrapper
              gridTemplateColumns={{ _: "1fr", desktop: "1fr 1fr" }}
              mb={{ _: "s0", desktop: "s200" }}
            >
              {ICONS.map(({ icon, id, title }) => (
                <BenefitFact icon={icon} key={id} title={title} />
              ))}{" "}
            </GridWrapper>
          </Box>
        </Box>
      </Box>
    </BoxContainer>
  );
};

const BoxContainer = styled(Box)`
  background: rgba(0, 29, 31, 0.75);
`;
