import styled, {
  createGlobalStyle,
  DefaultTheme,
  css,
} from "styled-components";

import { ShepherdTour } from "react-shepherd";

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
	html,
	body,
	#root,
	#grid-container {
		width: 100%;
		height: 100%;
		background: black;
		font-size: 12px;
	}

	body {
		font-family: ${(props) => props.theme.font_family}
	}

	// Shepard Styling
.shepherd-content {
  background: ${({ theme }) => theme.core_main + "33"};
  padding-top: 30px;
  color: #dbe5f3;
  max-width: 400px;
  border: solid 1px #dbe5f3;
  margin: 15px;
}

.shepherd-content h3,
.shepherd-content div {
  padding: 0 30px 0 30px;
  text-align: block;
}

.highlight {
  border: solid 1px ${({ theme }) => theme.core_accent};
}

.shepherd-cancel-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  padding: 5px 10px;
  border: solid 1px #dbe5f3;
	background: #dbe5f3;
}

svg.shepherd-modal-is-visible.shepherd-modal-overlay-container {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0.8;
}

.shepherd-footer button {
	box-sizing: border-box;
  width: 50%;
  margin-top: 30px;
	background:  #dbe5f3;
  height: 40px;
	border: 0;
	border-top: solid 1px ${({ theme }) => theme.core_accent};
}
.shepherd-footer button:hover {
		box-sizing: border-box;
	background: ${({ theme }) => theme.core_main + "10"};
	border: 0;
	border-top: solid 1px ${({ theme }) => theme.core_accent};
}

.shepherd-cancel-icon:hover  {
	background: ${({ theme }) => theme.core_accent};
}

.shepherd-footer button:hover,
.shepherd-cancel-icon:hover {
	color: #dbe5f3;
	outline: 0;
}

.shepherd-arrow {
  height: 15px;
  width: 15px;
  color: #dbe5f3;
}

.button.dark {
  cursor: pointer;
  position: absolute;
	background: ${({ theme }) => theme.core_deep};
	color: #dbe5f3;
	font-family: ${({ theme }) => theme.font_family};
	border: solid 1px ${({ theme }) => theme.core_accent};
  right: 20px;
  padding: 5px 10px;

	&:hover {
		border: solid 2px ${({ theme }) => theme.core_deep};
		animation: pulse 0.7s;
	}
}


// Keyframes
  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 ${({ theme }) => theme.core_accent};
    }
    50% {
      box-shadow: 0 0 0 1em${({ theme }) => theme.core_light};
    }
  }

	@keyframes colorGradient {
    0% {
      border-right: solid ${({ theme }) => theme.core_main} 1px;
      border-bottom: solid ${({ theme }) => theme.core_main} 1px;
    }
    50% {
      border-right: solid ${({ theme }) => theme.core_light} 1px;
      border-bottom: solid ${({ theme }) => theme.core_light} 1px;
    }
    100% {
      border-right: solid ${({ theme }) => theme.core_main} 1px;
      border-bottom: solid ${({ theme }) => theme.core_main} 1px;
    }
  }


	select, input {
		// border-radius: 10px;
		border: 0;
		background-color: #ffffff50;
		color: #dbe5f3;
		padding-right: 5px;
}
`;

/* Headers */

export const HeadGlobal = styled.div<{ theme: DefaultTheme }>`
  ${DisplayGrid({ justifyContent: "center", alignItems: "center" })};
  ${Box({ height: "50px", width: "100%" })};
  background: ${({ theme }) => theme.core_deep};
  color: #dbe5f3;
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
  background: ${({ theme }) => theme.core_light};
  color: #dbe5f3;
  overflow-y: scroll;

  input,
  select {
    width: 94%;
  }
`;

export const Button = styled.button<{ theme: DefaultTheme }>`
  color: ${({ theme }) => theme.core_main};
  background: ${({ theme }) => theme.core_deep};
  border: 0;
`;

export const VisualizeButtonGlobal = styled(Button)<{ theme: DefaultTheme }>`
  color: #dbe5f3;
  transition: 0.25s;
  border: solid 3px ${({ theme }) => theme.core_accent};
	font-family: ${(props) => props.theme.font_family}
  font-size: 16px;
  padding: 16px;
  height: 40px;

  &:hover {
    border: solid 3px ${({ theme }) => theme.core_light};
    color: #fff;
  }

  &:hover {
    animation: pulse 0.7s;
  }
  &:active {
    background: ${({ theme }) => theme.core_accent};
  }

  padding: 8px 30px;
`;

export const InfoBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: 1fr;
  box-sizing: border-box;
  border: solid 3px ${({ theme }) => theme.core_deep};
  background: ${({ theme }) => theme.core_main + "33"};
  padding: 10px;
  height: 70px;
`;

export const ToursGlobal = styled(ShepherdTour)<{ theme: DefaultTheme }>``;

export const Visualizer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

/* Columns */

interface SortingColumnInterface {
  height: number;
  color: string;
}

export const Column = styled.div<SortingColumnInterface>`
  .node {
    animation: colorGradient 10s infinite;
  }

  .node:nth-last-child(-n + ${(props) => props.height}) {
    background: ${(props) => props.color};
    animation: colorGradient 10s infinite;
    border-bottom: none !important;
  }

  .node:nth-last-child(${(props) => props.height}) {
    border-radius: 80% 0 0 0;
  }

  &.active {
    background: ${({ theme }) => theme.core_deep};
  }

  &.active .node:nth-last-child(-n + ${(props) => props.height}) {
    background: linear-gradient(
      to right,
      #bdffde,
      #d4cfe0,
      #bdffde,
      #dbf5b7,
      #bdffde
    );
    box-shadow: none;
  }
`;
