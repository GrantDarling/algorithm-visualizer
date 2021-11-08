import "./App.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/styles-global";
import { useSelector } from "react-redux";
import AlgorithmnVisualizer from "./visualizer/algorithmn-visualizer";

const App = () => {
  const theme = useSelector((state: GlobalState) => state.theme);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AlgorithmnVisualizer />
    </ThemeProvider>
  );
};

export default App;
