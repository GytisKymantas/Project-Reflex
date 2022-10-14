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
  <ContainerStyled width="18.75rem" position="relative">
    <Box position="absolute" top="-7.2%" left="0%">
      <BlackTriangle />
    </Box>
    <RotatedBlackTriangleContainer position="absolute" top="98.9%" left="0%">
      <BlackTriangle />
    </RotatedBlackTriangleContainer>
    <Box pl="s35">
      <Box mt="s45" mb="s20">
        {icon}
      </Box>
      <Box mb="s45" width="14.375rem">
        <Typography
          mt="s20"
          mb="s45"
          fontFamily="Open sans"
          fontSize="fs24"
          color="primary"
          lineHeight="lh27"
          fontWeight="fw300"
          textTransform="uppercase"
        >
          {" "}
          {title}{" "}
        </Typography>{" "}
      </Box>
    </Box>
    <ListContainer mb="s60" ml="s20" width="14.375rem" color="primary">
      <ul>
        <li>Morbi tortor tortor, c</li> <li>Consectetur in elementum</li>{" "}
        <li>Sed aliquam sollicitudin</li> <li>Mauris congue tempor tempus</li>
      </ul>
    </ListContainer>{" "}
  </ContainerStyled>
);

const ListContainer = styled(Box)`
  & li {
    margin-bottom: 1.0625rem;
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8125rem;
  }
  & li::marker {
    font-size: 0.625rem;
  }
`;

const ContainerStyled = styled(Box)`
  color: ${theme.colors.secondary};
  background: ${theme.colors.Dark};
`;

const RotatedBlackTriangleContainer = styled(Box)`
  transform: rotate(-180deg);
`;
