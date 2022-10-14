import React from "react";
import { Box, Typography } from "components";

import { useQuery } from "styles/breakpoints";
import { FlexWrapper } from "components/wrappers/FlexWrapper";

interface BenefitFactProps {
  icon: React.ReactNode;
  title: string;
}
export const BenefitFact: React.FC<BenefitFactProps> = ({ icon, title }) => {
  const { isTablet, isSmDesktop } = useQuery();
  return (
    <FlexWrapper
      justifyContent={isSmDesktop ? "center" : "center"}
      mb={{ _: "20px", desktop: "150px" }}
    >
      <Box>
        <FlexWrapper flexDirection={isTablet ? "column" : "row"}>
          <FlexWrapper
            mt="20px"
            justifyContent={isTablet ? "center" : "left"}
            mb={{ _: "20px", ltablet: "0" }}
          >
            {icon}
          </FlexWrapper>
          <Box ml={{ ltablet: "37.25px" }} mx="auto" width="300px">
            <Typography
              mb={{ _: "10px", ltablet: "20px" }}
              fontFamily="Open Sans"
              fontWeight="fw300"
              lineHeight="lh27p24"
              textTransform="uppercase"
              fontSize="fs20"
              textAlign={{ _: "center", ltablet: "left" }}
              color="primary"
            >
              {title}
            </Typography>
            <Typography
              fontFamily="Open Sans"
              fontWeight="fw400"
              fontSize="fs15"
              lineHeight="lh20"
              color="primary"
              textAlign={{ _: "center", ltablet: "left" }}
            >
              Etiam semper ipsum et enim interdum sagittis vel et enim. Nam
              lacinia quam at lacus laoreet posuere. Morbi et risus eu diam
              pulvinar interdum id ut mauris.
            </Typography>
          </Box>
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
};
