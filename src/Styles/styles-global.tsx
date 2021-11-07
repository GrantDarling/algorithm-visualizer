import styled, {
  createGlobalStyle,
  DefaultTheme,
  css,
} from "styled-components";

// Mixins
interface DisplayGridProps {
  justifyContent?: string;
  alignItems?: string;
  columnGap?: string;
}

interface BoxProps {
  height?: string;
  width?: string;
}

interface ColumnSubHeadProps {
  infoBoxes: string;
  visualizer: string;
}

const DisplayGrid = ({
  justifyContent,
  alignItems,
  columnGap,
}: DisplayGridProps) => css`
  display: grid;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  column-gap: ${columnGap};
`;

const Box = ({ height, width }: BoxProps) => css`
  height: ${height};
  width: ${width};
`;

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
	body {
		font-family: ${(props) => props.theme.fontFamily}
	}

// Keyframes
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 #6f6db5;
    }
    50% {
      box-shadow: 0 0 0 1em #ff990000;
    }
  }
`;

/* Headers */

export const HeadGlobal = styled.div<{ theme: DefaultTheme }>`
  ${DisplayGrid({ justifyContent: "center", alignItems: "center" })};
  ${Box({ height: "50px", width: "100%" })};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  font-size: 23px;
`;
const ColumnSubHead = ({ infoBoxes, visualizer }: ColumnSubHeadProps) => css`
  grid-template-columns:
    ${infoBoxes} ${infoBoxes} ${visualizer}
    ${infoBoxes} ${infoBoxes};
`;
export const SubHeadGlobal = styled.div<{ theme: DefaultTheme }>`
  ${DisplayGrid({
    justifyContent: "space-around",
    alignItems: "center",
    columnGap: "40px",
  })};
  ${ColumnSubHead({
    infoBoxes: "minmax(100px, 200px)",
    visualizer: "minmax(150px, 300px)",
  })}
  ${Box({ height: "100px", width: "100%" })};
  background: rgb(44, 20, 73);
  color: white;
  overflow: hidden;

  input,
  select {
    width: 100%;
  }
`;

export const Button = styled.button<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.button.color};
  border: 0;
`;

export const VisualizeButtonGlobal = styled(Button)<{ theme: DefaultTheme }>`
  color: white;
  transition: 0.25s;
  border: solid 1px #6f6db5;
  font-size: 16px;
  padding: 16px;
  height: 40px;

  &:hover {
    border: solid 1px #540363;
    color: #fff;
  }

  &:hover {
    animation: pulse 0.5s;
  }
  &:active {
    background: #1cdda3;
  }

  padding: 8px 30px;
`;

export const InfoBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.infoBox.background};
  padding: 16px;
`;
