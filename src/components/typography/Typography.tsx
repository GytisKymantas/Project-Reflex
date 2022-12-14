import { Property } from "csstype";
import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import {
  compose,
  fontWeight,
  lineHeight,
  LineHeightProps,
  space,
  SpaceProps,
  textAlign,
  TypographyProps,
  textStyle,
  typography,
} from "styled-system";

import { Colors, Theme } from "styles/theme";

import { applyTextType } from "./TypographyHelpers";

export type TextType = "h1" | "h2" | "h3" | "h4" | "body16";

export enum TextTag {
  "h1" = "h1",
  "h2" = "h2",
  "h3" = "h3",
  "h4" = "h4",
  "body16" = "body16",
}

type AsAttributeType = string | React.ComponentType;

const typographyProperties = compose(
  textAlign,
  fontWeight,
  textStyle,
  typography,
  lineHeight,
  space
);

export interface TextProps
  extends SpaceProps,
    LineHeightProps<Theme>,
    TypographyProps<Theme> {
  color?: Colors;
  type?: TextType;
  textTransform?: Property.TextTransform;
  textDecoration?: Property.TextDecoration;
  onClick?: () => void;
  children: ReactNode;
}

export const Typography: React.FC<TextProps> = ({
  type = "body16",
  children,
  ...props
}) => {
  const as = TextTag[type] as AsAttributeType;

  return (
    <Text as={as} type={type} {...props}>
      {children}
    </Text>
  );
};

const Text = styled.p<TextProps>`
  padding: 0;

  ${({ type, theme }) =>
    type && applyTextType(type as TextType, theme as Theme)};

  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.primary};

  && {
    ${typographyProperties}
  }
  text-transform: ${({ textTransform }) => textTransform || ""};

  text-decoration: ${({ textDecoration }) => textDecoration || ""};
`;
