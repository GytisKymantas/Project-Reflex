import React from "react";
import { Box, SectionWrapper, Typography, Image } from "components";
import { BaseButton } from "components/buttons/elements/BaseButton";
import styled from "styled-components";
import { Container } from "components/wrappers/Container";
import { Logo } from "assets/svg/Logo";
import { theme } from "styles/theme";
import { zIndex } from "styled-system";
import { PeopleIcon } from "assets/svg/PeopleIcon";

export const FeatureCard = () => {
  return (
    <ContainerStyled width="300px" height="377px">
      <Container p="44px 35px 0 35px">
        <Box>
          <PeopleIcon />
        </Box>
        <Box>
          <Typography m="20px 0 44px 0" fs="fs20" color="secondary">
            {" "}
            Vestibulum tempus placerat.{" "}
          </Typography>{" "}
        </Box>
        <ListContainer>
          <li>Morbi tortor tortor, c</li> <li>Consectetur in elementum</li>{" "}
          <li>Sed aliquam sollicitudin</li> <li>Mauris congue tempor tempus</li>
        </ListContainer>{" "}
      </Container>
    </ContainerStyled>
  );
};
const ListContainer = styled(Box)`
  & li {
    margin-bottom: 5px;
    font-size: 14px;
  }
`;

const ContainerStyled = styled(Container)`
  /* clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%); */

  color: ${theme.colors.secondary};
  background: ${theme.colors.Dark};
`;
const BoxStyled = styled(Box)``;
