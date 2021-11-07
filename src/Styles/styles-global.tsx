import styled, { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
* {
		background: ${(props) => props.theme.background};
		color: ${(props) => props.theme.color}
}
`;

export const InfoBox = styled.div<{ theme: DefaultTheme }>`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.infoBox.background};
  padding: 16px;
`;
