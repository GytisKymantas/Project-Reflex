import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { BlackTriangle } from "assets/svg/BlackTriangle";
import { theme } from "styles/theme";
import { zIndex } from "styled-system";
import { PeopleIcon } from "assets/svg/PeopleIcon";

interface FeatureCardProps {
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon }) => {
  console.log(icon);
  return (
    <ContainerStyled width="300px" position="relative">
      <Box position="absolute" top="-7.9%" left="0%">
        <BlackTriangle />
      </Box>
      <RotatedBlackTriangleContainer
        position="absolute"
        top="98.9%"
        left="0%"
        transform="rotate(-180deg);"
      >
        <BlackTriangle />
      </RotatedBlackTriangleContainer>
      <Box pl="35px">
        <Box m="44px 0 20.62px 0">{icon}</Box>
        <Box mb="44px">
          <TypographyStyled
            m="20px 0 44px 0"
            fs="fs20"
            color="primary"
            fw="300"
          >
            {" "}
            Vestibulum tempus placerat.{" "}
          </TypographyStyled>{" "}
        </Box>
      </Box>
      <ListContainer mb="61px" ml="20px" width="230px" color="primary">
        <ul>
          <li>Morbi tortor tortor, c</li> <li>Consectetur in elementum</li>{" "}
          <li>Sed aliquam sollicitudin</li> <li>Mauris congue tempor tempus</li>
        </ul>
      </ListContainer>{" "}
    </ContainerStyled>
  );
};
const ListContainer = styled(Box)`
  & li {
    margin-bottom: 5px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
`;

const ContainerStyled = styled(Container)`
  /* clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%); */

  color: ${theme.colors.secondary};
  background: ${theme.colors.Dark};
`;
const TypographyStyled = styled(Typography)`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
`;

const RotatedBlackTriangleContainer = styled(Box)`
  transform: rotate(-180deg);
`;
