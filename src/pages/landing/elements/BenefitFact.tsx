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
    <FlexWrapper justifyContent={isSmDesktop ? "center" : "center"} pb="150px">
      <Box>
        <FlexWrapper flexDirection={isTablet ? "column" : "row"}>
          <FlexWrapper
            mt="s20"
            justifyContent={isTablet ? "center" : "left"}
            mb={{ _: "s20", ltablet: "s0" }}
          >
            {icon}
          </FlexWrapper>
          <Box ml={{ ltablet: "s35" }} mx="auto" width="25rem">
            <Typography
              mb={{ _: "s10", ltablet: "s20" }}
              fontFamily="Open Sans"
              fontWeight="fw300"
              lineHeight="lh27"
              textTransform="uppercase"
              fontSize="fs20"
              textAlign={{ _: "center", ltablet: "left" }}
              color="primary"
            >
              {" "}
              {title}
            </Typography>{" "}
            <Typography
              fontFamily="Open Sans"
              fontWeight="fw400"
              fontSize="fs15"
              lineHeight="lh20"
              color="primary"
              textAlign={{ _: "center", ltablet: "left" }}
            >
              {" "}
              Etiam semper ipsum et enim interdum sagittis vel et enim. Nam
              lacinia quam at lacus laoreet posuere. Morbi et risus eu diam
              pulvinar interdum id ut mauris.{" "}
            </Typography>{" "}
          </Box>
        </FlexWrapper>
      </Box>
    </FlexWrapper>
  );
};
