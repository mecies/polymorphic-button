import { css, styled } from "styled-components";
import { darken } from "polished";
import { LucideProps } from "lucide-react";

export type Variant = "PRIMARY" | "SECONDARY";
export type Size = "SMALL" | "LARGE";

type WrapperProps = {
  $variant: Variant;
  $size: Size;
  $fillContainer: boolean;
};

export const ICON_SIZE = 20;

export const VARIANT_TO_ICON_PROPS_MAP: Record<Variant, LucideProps> = {
  PRIMARY: {
    color: "#fff",
  },
  SECONDARY: {
    color: "#1f99d6",
  },
};

function getStyleForVariant(variant: Variant) {
  if (variant === "PRIMARY") {
    return css`
      border-radius: 50px;
      border: 1px solid #cd141a;
      background: #cd141a;
      color: #fff;

      &:hover {
        border: 1px solid ${darken(0.05, "#cd141a")};
        background: ${darken(0.05, "#cd141a")};
      }

      &:active {
        border: 1px solid ${darken(0.1, "#cd141a")};
        background: ${darken(0.1, "#cd141a")};
      }
    `;
  }

  return css`
    border-radius: 50px;
    border: 1px solid #1f99d6;
    background: #fff;
    color: #1f99d6;

    &:hover {
      background: ${darken(0.05, "#fff")};
    }

    &:active {
      background: ${darken(0.1, "#fff")};
    }
  `;
}

function getStyleForSize(size: Size) {
  if (size === "SMALL") {
    return css`
      font-size: 16px;
      padding: 10px 20px;
    `;
  }

  return css`
    font-size: 21px;
    padding: 16px 30px;
  `;
}

function getStyleForFillContainer(fillContainer: boolean) {
  if (fillContainer) {
    return css`
      width: 100%;
    `;
  }

  return css`
    width: fit-content;
  `;
}

function getStyleForDisabled(disabled: boolean) {
  if (disabled) {
    return css`
      cursor: not-allowed;
    `;
  }

  return css`
    cursor: pointer;
  `;
}

export const Wrapper = styled.button<WrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 16px;
  max-width: 100%;

  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 700;
  font-feature-settings: "liga" 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;

  transition: background-color 0.1s ease, border-color 0.1s ease;

  &:focus-visible {
    outline: 2px solid #2474b6;
    outline-offset: 2px;
  }

  /* Make sure the icon is not shrunk when the text is truncated */
  svg {
    min-width: ${ICON_SIZE}px;
  }

  ${({ disabled }) => getStyleForDisabled(!!disabled)};
  ${({ $variant }) => getStyleForVariant($variant)};
  ${({ $size }) => getStyleForSize($size)};
  ${({ $fillContainer }) => getStyleForFillContainer($fillContainer)};
`;

export const ChildrenWrapper = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100%;
`;
