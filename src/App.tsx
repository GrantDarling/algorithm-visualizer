import "./App.css";
import AlgorithmnVisualizer from "./Visualizer/AlgorithmnVisualizer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/styles-global";
import { darkTheme } from "./styles/styles-themes";

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <AlgorithmnVisualizer />
    </ThemeProvider>
  );
};

export default App;
