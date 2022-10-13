import React from "react";
import { Box, Typography } from "components";
import styled from "styled-components/macro";
import { Container } from "components/wrappers/Container";

import { StarIcon } from "assets/svg/StarIcon";
import { theme } from "styles/theme";
import { FlexWrapper } from "components/wrappers/FlexWrapper";

const STARS = ["1", "2", "3", "4", "5"];

export const TestimonialsSection: React.FC = () => {
  return (
    <SectionWrapperStyled>
      <ContainerStlyed>
        <Box
          pt={{ _: "80px", ltablet: "s115" }}
          mb={{ _: "60px", ltablet: "s125" }}
          textAlign={{ _: "center", ltablet: "left" }}
        >
          <Typography
            fontWeight={400}
            fontSize={{ _: "50px", ltablet: "64px" }}
            lineHeight="84px"
            color="primary"
          >
            Testimonials
          </Typography>
        </Box>

        <FlexWrapper flexDirection={{ _: "column", ltablet: "row" }}>
          <Box mr="s105" mb={{ _: "s60", ltablet: "0" }} width="100%">
            <Author
              color="primary"
              textAlign={{ _: "center", ltablet: "left" }}
            >
              {" "}
              Susana D.{" "}
            </Author>
            <Profession
              color="primary"
              textAlign={{ _: "center", ltablet: "left" }}
            >
              {" "}
              Marketing and Communication{" "}
            </Profession>
          </Box>
          <Box>
            <ParagraphStyled color="primary" pb="s16">
              {" "}
              “Nunc a condimentum lorem. Nulla quis nisi facilisis, vulputate
              eros vitae, aliquam mi. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas. Cras
              interdum sed nisl quis sollicitudin. Pellentesque sit amet blandit
              lectus, et malesuada libero.”
            </ParagraphStyled>
            <Box pb="s150" textAlign={{ _: "center", ltablet: "left" }}>
              {STARS.map((star) => (
                <StarIcon key={star} />
              ))}
            </Box>
          </Box>
        </FlexWrapper>
      </ContainerStlyed>
    </SectionWrapperStyled>
  );
};
const SectionWrapperStyled = styled(Box)`
  background: url();
  background-position: center;
  background: ${theme.colors.Dark};
`;

const Author = styled(Typography)`
  font-family: "Open Sans";
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  text-transform: uppercase;
`;

const Profession = styled(Typography)`
  font-family: "Open Sans";
  font-weight: 300;
  font-size: 19px;
  line-height: 27px;
  text-transform: uppercase;
`;

const ParagraphStyled = styled(Typography)`
  font-family: "Open Sans";
  font-style: italic;
  font-weight: 300;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
`;

const ContainerStlyed = styled(Container)``;
