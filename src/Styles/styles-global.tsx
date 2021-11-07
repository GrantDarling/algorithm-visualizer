import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
* {
		background: ${(props) => props.theme.background};
		color: ${(props) => props.theme.color}
}
  `;
