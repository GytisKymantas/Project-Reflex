import React from "react";
import { Box, Typography } from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { FeatureCard } from "../elements/FeatureCard";
import { useQuery } from "styles/breakpoints";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { ABOUT_ICONS } from "constants/constants";

export const AboutSection: React.FC = () => {
  const { isTablet, isSmDesktop } = useQuery();

  return (
    <SectionWrapperStyled
      as="section"
      pt={{ _: "s80", ltablet: "s110" }}
      height="100%"
      maxWidth="94.5rem"
      mx="auto"
    >
      <Box>
        <Box
          ml={{ desktop: "s200" }}
          mb="s115"
          textAlign={{ _: "center", desktop: "left" }}
        >
          <Typography
            color="primary"
            fontWeight="fw400"
            fontSize="fs64"
            lineHeight="lh84"
          >
            {" "}
            About our features
          </Typography>{" "}
        </Box>
        <FlexWrapper
          flexDirection={isSmDesktop ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          gap="6.5625rem"
        >
          {ABOUT_ICONS.map(({ icon, id, title }) => (
            <FeatureCard icon={icon} title={title} key={id} />
          ))}
        </FlexWrapper>
      </Box>
      <Box
        mt="s140"
        pb="s110"
        width={{ _: "15.625rem", ltablet: "24.375rem" }}
        mx="auto"
      >
        <BaseButtonStyled color="primary" type="button">
          Lorem Ipsum
        </BaseButtonStyled>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: ${theme.colors.lightDark};
`;

const BaseButtonStyled = styled(BaseButton)`
  width: 100%;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2.0625rem;
  margin: 0 auto;
  padding: 1rem 2.5rem;
`;
