import React from "react";
import { Box, Typography } from "components";
import styled from "styled-components/macro";

import { StarIcon } from "assets/svg/StarIcon";
import { useQuery } from "styles/breakpoints";
import { theme } from "styles/theme";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { STARS } from "constants/constants";

export const TestimonialsSection: React.FC = () => {
  const { isTablet, isSmDesktop } = useQuery();
  return (
    <SectionWrapperStyled
      p="113px 0 152px 0"
      as="section"
      maxWidth="1512px"
      mx="auto"
    >
      <Box>
        <Box
          m={{ _: "0 0 60px 0", ltablet: "0 0 93px 200px" }}
          textAlign={{ _: "center", ltablet: "left" }}
        >
          <Typography
            fontWeight="fw400"
            fontSize={{ _: "fs50", ltablet: "fs64" }}
            lineHeight="lh84p41"
            color="primary"
          >
            Testimonials
          </Typography>
        </Box>
        <FlexWrapper flexDirection={isSmDesktop ? "column" : "row"}>
          <Box
            mb={{ _: "s60", ltablet: "s0" }}
            ml={{ _: "s0", ltablet: "s200" }}
          >
            <Box width="163px" mx={{ _: "auto", ltablet: "0" }}>
              <Typography
                color="primary"
                textAlign={{ _: "center", ltablet: "left" }}
                fontFamily="Open Sans"
                fontWeight="fw400"
                fontSize="fs32"
                lineHeight="lh44"
                textTransform="uppercase"
              >
                Susana D.
              </Typography>
            </Box>
            <Box
              width="329px"
              ml={isTablet ? "auto" : ""}
              mr={{ _: "auto", ltablet: "105px" }}
            >
              <Typography
                fontFamily="Open Sans"
                fontWeight="fw300"
                fontSize={{ _: "fs16", ltablet: "fs20" }}
                lineHeight="lh27p24"
                textTransform="uppercase"
                color="primary"
                textAlign={{ _: "center", ltablet: "left" }}
              >
                Marketing and Communication
              </Typography>
            </Box>
          </Box>
          <Box width={{ _: "100%", ltablet: "673px" }} mx="auto">
            <Typography
              fontFamily="Open Sans"
              fontStyle="italic"
              fontWeight="fw300"
              fontSize={{ _: "fs16", ltablet: "fs20" }}
              lineHeight="lh27p24"
              textAlign={{ _: "center", ltablet: "left" }}
              color="primary"
              mb="s16"
            >
              “Nunc a condimentum lorem. Nulla quis nisi facilisis, vulputate
              eros vitae, aliquam mi. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Cras
              interdum sed nisl quis sollicitudin. Pellentesque sit amet blandit
              lectus, et malesuada libero.”
            </Typography>
            <FlexWrapper
              gap="6px"
              justifyContent={isSmDesktop ? "center" : "row"}
            >
              {STARS.map((star) => (
                <StarIcon key={star} />
              ))}
            </FlexWrapper>
          </Box>
        </FlexWrapper>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: ${theme.colors.lightDark};
`;
