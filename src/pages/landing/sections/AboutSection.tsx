import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";
import styled from "styled-components";
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
    <SectionWrapperStyled as="section" p="112px 0 112px 0">
      <ContainerStlyed>
        <BoxStyled mb="85px">
          <TypographyStyled color="primary" type="h2">
            {" "}
            About our features
          </TypographyStyled>{" "}
        </BoxStyled>
        <FlexWrapper>
          {ICONS.map(({ icon }) => (
            <FeatureCard icon={icon} />
          ))}
        </FlexWrapper>
      </ContainerStlyed>
      <Box width="200px" margin="113px auto 116px auto">
        <BaseButtonStyled color="primary" type="button" padding="15px 40px">
          Lorem Ipsum
        </BaseButtonStyled>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: ${theme.colors.lightDark};
  background-position: center;
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const BoxStyled = styled(Box)``;

const BaseButtonStyled = styled(BaseButton)`
  width: 390px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 33px;
`;

const TypographyStyled = styled(Typography)`
  font-family: "Roboto Slab";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 84px;
  display: flex;
  align-items: center;
`;
