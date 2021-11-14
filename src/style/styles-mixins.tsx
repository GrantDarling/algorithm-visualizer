import { css } from "styled-components";
import { DisplayGridProps, BoxProps } from "./styles-interfaces";

export const DisplayGrid: any = ({
  justifyContent,
  alignItems,
  columnGap,
}: DisplayGridProps) => css`
  display: grid;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  column-gap: ${columnGap};
`;

export const Box: any = ({ height, width }: BoxProps) => css`
  height: ${height};
  width: ${width};
`;
