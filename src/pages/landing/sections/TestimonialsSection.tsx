import React from "react";
import { Box, Typography } from "components";
import styled from "styled-components/macro";

import { StarIcon } from "assets/svg/StarIcon";
import { useQuery } from "styles/breakpoints";
import { theme } from "styles/theme";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { STARS } from "constants/constants";

export const TestimonialsSection: React.FC = () => {
  const { isTablet } = useQuery();
  return (
    <SectionWrapperStyled
      height={{ _: "100%", ltablet: "36.375rem" }}
      maxWidth="94.5rem"
      mx="auto"
    >
      <Box>
        <Box
          pt={{ _: "s80", ltablet: "s115" }}
          mb={{ _: "s60", ltablet: "s0" }}
          textAlign={{ _: "center", ltablet: "left" }}
          ml={{ _: "s0", ltablet: "s200" }}
        >
          <Typography
            fontWeight="fw400"
            fontSize={{ _: "fs50", ltablet: "fs64" }}
            lineHeight="lh84"
            color="primary"
          >
            Testimonials
          </Typography>
        </Box>
        <FlexWrapper
          mt={{ _: "s0", ltablet: "s95" }}
          flexDirection={isTablet ? "column" : "row"}
        >
          <Box
            mb={{ _: "s60", ltablet: "s0" }}
            ml={{ _: "s0", ltablet: "s200" }}
            width="100%"
          >
            <Typography
              color="primary"
              textAlign={{ _: "center", ltablet: "left" }}
              fontFamily="Open Sans"
              fontWeight="fw400"
              fontSize="fs32"
              lineHeight="lh44"
              textTransform="uppercase"
              mb="s10"
            >
              {" "}
              Susana D.{" "}
            </Typography>
            <Typography
              fontFamily="Open Sans"
              fontWeight="fw300"
              fontSize="fs19"
              lineHeight="lh27"
              textTransform="uppercase"
              color="primary"
              textAlign={{ _: "center", ltablet: "left" }}
            >
              {" "}
              Marketing and Communication{" "}
            </Typography>
          </Box>
          <Box>
            <Typography
              fontFamily="Open Sans"
              fontStyle="italic"
              fontWeight="fw300"
              fontSize="fs20"
              lineHeight="lh27"
              textAlign={{ _: "center", ltablet: "left" }}
              color="primary"
              pb="s16"
            >
              {" "}
              “Nunc a condimentum lorem. Nulla quis nisi facilisis, vulputate
              eros vitae, aliquam mi. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Cras
              interdum sed nisl quis sollicitudin. Pellentesque sit amet blandit
              lectus, et malesuada libero.”
            </Typography>
            <Box
              pb={{ _: "s80", ltablet: "s140" }}
              textAlign={{ _: "center", ltablet: "left" }}
            >
              {STARS.map((star) => (
                <StarIcon key={star} />
              ))}
            </Box>
          </Box>
        </FlexWrapper>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: ${theme.colors.lightDark};
`;
