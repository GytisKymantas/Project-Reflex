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
    <BoxContainer as="section">
      <Box
        pb={{ _: "100px", ltablet: "200px" }}
        height={{ _: "100%", desktop: "967px" }}
        maxWidth="1512px"
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
            <Image src="teamMobile" alt="team" height="1450px" width="100%" />
          ) : (
            <Image src="team" alt="team" height="967px" width="100%" />
          )}
        </Box>
        <Box>
          <Box
            pt={{ _: "80px", ltablet: "112px" }}
            pl={{ _: "0", desktop: "200px" }}
            textAlign={{ _: "center", desktop: "left" }}
          >
            <Typography
              lineHeight={{ _: "lh63p3", ltablet: "lh84p41" }}
              color="primary"
              mb="16px"
              fontSize={{ _: "fs48", desktop: "fs64" }}
              fontWeight="fw400"
            >
              Our benefits
            </Typography>
            <Box
              width={{ _: "100%", desktop: "1112px" }}
              mb={{ _: "50px", ltablet: "123px" }}
              mx={isLgDesktop ? "auto" : ""}
            >
              <Typography
                color="primary"
                fontSize={{ _: "fs16", desktop: "fs20" }}
                lineHeight={{ _: "lh27p24", ltablet: "lh38" }}
                type="span"
              >
                Suspendisse porttitor ex a mollis consectetur. Donec egestas,
                libero sed viverra sodales, dui eros pulvinar diam, at mollis
                libero purus lobortis mauris.
              </Typography>
            </Box>
          </Box>
          <Box maxWidth="1180px" mx="auto">
            <GridWrapper
              gridTemplateColumns={{ _: "1fr", desktop: "repeat(2,1fr)" }}
              mb={{ _: "0", desktop: "200px" }}
            >
              {ICONS.map(({ icon, id, title }) => (
                <BenefitFact icon={icon} key={id} title={title} />
              ))}
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
