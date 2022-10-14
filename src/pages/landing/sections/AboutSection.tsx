import React from "react";
import { Box, Typography, FlexWrapper, BaseButton } from "components";
import styled from "styled-components/macro";
import { theme } from "styles/theme";
import { FeatureCard } from "../elements/FeatureCard";
import { useQuery } from "styles/breakpoints";
import { ABOUT_ICONS } from "constants/constants";

export const AboutSection: React.FC = () => {
  const { isSmDesktop } = useQuery();

  return (
    <SectionWrapperStyled
      as="section"
      maxWidth="1512px"
      mx="auto"
      p="110.5px 0 110.5px 0"
    >
      <Box>
        <Box
          width={{ _: "100%", desktop: "1112px" }}
          ml={{ desktop: "200px" }}
          mb="114px"
          textAlign={{ _: "center", desktop: "left" }}
          mx="auto"
        >
          <Typography
            color="primary"
            fontWeight="fw400"
            fontSize="fs64"
            lineHeight="lh84p41"
          >
            About our features
          </Typography>
        </Box>
        <FlexWrapper
          flexDirection={isSmDesktop ? "column" : "row"}
          justifyContent="center"
          alignItems="center"
          gap="105px"
        >
          {ABOUT_ICONS.map(({ icon, id, title }) => (
            <FeatureCard icon={icon} title={title} key={id} />
          ))}
        </FlexWrapper>
      </Box>
      <Box mx="auto" mt="142px" width={{ _: "250px", ltablet: "390px" }}>
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
  font-size: 24px;
  line-height: 33px;
  margin: 0 auto;
  padding: 16px 40px;
`;
