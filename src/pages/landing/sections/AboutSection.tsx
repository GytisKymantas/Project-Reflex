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

export const AboutSection = () => {
  return (
    <SectionWrapperStyled>
      <ContainerStlyed>
        <BoxStyled>
          <Typography color="secondary" type="h2">
            {" "}
            About our features
          </Typography>{" "}
        </BoxStyled>
        <FlexWrapper mt="85px">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </FlexWrapper>
      </ContainerStlyed>
      <Box width="200px" margin="113px auto 116px auto">
        <BaseButton color="primary" type="button" padding="15px 40px">
          Lorem Ipsum
        </BaseButton>
      </Box>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(SectionWrapper)`
  background: ${theme.colors.lightDark};
  background-position: center;
`;

const ContainerStlyed = styled(Container)`
  /* background: gray; */
`;
const BoxStyled = styled(Box)``;
