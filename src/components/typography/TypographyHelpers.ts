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
          line-height: ${theme.typography.h1.lineHeightMobile};
        }
      `;
    case "h2":
      return css`
        font-weight: ${theme.typography.h2.fontWeight};
        font-size: ${theme.typography.h2.fontSize};
        line-height: ${theme.typography.h2.lineHeight};

        @media ${tablet} {
          font-size: ${theme.typography.h2.fontSizeMobile};
          line-height: ${theme.typography.h2.lineHeightMobile};

        }
      `;
    case "h3":
      return css`
        font-weight: ${theme.typography.h3.fontWeight};
        font-size: ${theme.typography.h3.fontSize};
        line-height: ${theme.typography.h3.lineHeight};

        @media ${tablet} {
          font-size: ${theme.typography.h3.fontSizeMobile};
          line-height: ${theme.typography.h3.lineHeightMobile};

        }
      `;
    case "h4":
      return css`
        font-weight: ${theme.typography.h4.fontWeight};
        font-size: ${theme.typography.h4.fontSize};
        line-height: ${theme.typography.h4.lineHeight};

        @media ${tablet} {
          font-size: ${theme.typography.h4.fontSizeMobile};
          line-height: ${theme.typography.h4.lineHeightMobile};

        }
      `;
  }
};
