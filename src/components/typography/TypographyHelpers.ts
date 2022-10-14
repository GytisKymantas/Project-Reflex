import { TextType } from "./Typography";
import { css } from "styled-components/macro";
import { Theme } from "styles/theme";
import { tablet } from "styles/breakpoints";

export const applyTextType = (type: TextType, theme: Theme) => {
  switch (type) {
    case "h1":
      return css`
        font-weight: ${theme.typography.h1.fontWeight};
        font-size: ${theme.typography.h1.fontSize};
        line-height: ${theme.typography.h1.lineHeight};

        @media ${tablet} {
          font-size: ${theme.typography.h1.fontSizeMobile};
        }
      `;
    case "h2":
      return css`
        font-weight: ${theme.typography.h2.fontWeight};
        font-size: ${theme.typography.h2.fontSize};
        line-height: ${theme.typography.h2.lineHeight};

        @media ${tablet} {
          font-size: ${theme.typography.h2.fontSizeMobile};
        }
      `;
  }
};