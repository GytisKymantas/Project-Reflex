import React from "react";
import { Box, Typography } from "components";
import styled from "styled-components/macro";
import { BlackTriangle } from "assets/svg/BlackTriangle";
import { theme } from "styles/theme";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => (
  <ContainerStyled width="300px" position="relative">
    <Box position="absolute" top="-7.2%" left="0%">
      <BlackTriangle />
    </Box>
    <RotatedBlackTriangleContainer position="absolute" top="98.9%" left="0%">
      <BlackTriangle />
    </RotatedBlackTriangleContainer>
    <Box pl="35px">
      <Box mt="44px" mb="20.62px">
        {icon}
      </Box>
      <Box mb="44px" width="230px">
        <Typography
          fontFamily="Open sans"
          fontSize="fs20"
          color="primary"
          lineHeight="lh27p24"
          fontWeight="fw300"
          textTransform="uppercase"
        >
          {title}
        </Typography>
      </Box>
    </Box>
    <ListContainer
      pb="2.42px"
      mb="37px"
      mx="auto"
      width="230px"
      color="primary"
    >
      <li>Morbi tortor tortor, c</li> <li>Consectetur in elementum</li>
      <li>Sed aliquam sollicitudin</li> <li>Mauris congue tempor tempus</li>
    </ListContainer>
  </ContainerStyled>
);

const ListContainer = styled(Box)`
  & li {
    margin-bottom: 12px;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
  }
  & li::marker {
    font-size: 10px;
  }
`;

const ContainerStyled = styled(Box)`
  color: ${theme.colors.secondary};
  background: ${theme.colors.Dark};
`;

const RotatedBlackTriangleContainer = styled(Box)`
  transform: rotate(-180deg);
`;
