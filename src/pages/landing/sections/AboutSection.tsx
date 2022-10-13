import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";
import styled from "styled-components/macro";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { theme } from "styles/theme";
import { FeatureCard } from "../elements/FeatureCard";
import { zIndex } from "styled-system";
import { FlexWrapper } from "components/wrappers/FlexWrapper";
import { PeopleIcon } from "assets/svg/PeopleIcon";
import { RocketIcon } from "assets/svg/RocketIcon";
import { TrophyIcon } from "assets/svg/TrophyIcon";

const ICONS = [
  {
    icon: <PeopleIcon />,
    id: 1,
  },
  {
    icon: <RocketIcon />,
    id: 2,
  },
  {
    icon: <TrophyIcon />,
    id: 3,
  },
];

export const AboutSection = () => {
  return (
    <SectionWrapperStyled as="section" py={{ _: "80px", ltablet: "115px" }}>
      <ContainerStlyed>
        <BoxStyled mb="s85" textAlign={{ _: "center", ltablet: "left" }}>
          <TypographyStyled color="primary">
            {" "}
            About our features
          </TypographyStyled>{" "}
        </BoxStyled>
        <FlexWrapper flexDirection={{ _: "column", ltablet: "row" }} gap="80px">
          {ICONS.map(({ icon }) => (
            <FeatureCard icon={icon} />
          ))}
        </FlexWrapper>
      </ContainerStlyed>
      <Box mt="s115" width={{ _: "250px", ltablet: "390px" }} mx="auto">
        <BaseButtonStyled color="primary" type="button">
          Lorem Ipsum
        </BaseButtonStyled>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: ${theme.colors.lightDark};
  background-position: center;
  /* padding-top: 120px;
  padding-bottom: 120px; */
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const BoxStyled = styled(Box)``;

const BaseButtonStyled = styled(BaseButton)`
  width: 100%;
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
  margin: 0 auto;
  padding: 16px 40px;
`;

const TypographyStyled = styled(Typography)`
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
`;
