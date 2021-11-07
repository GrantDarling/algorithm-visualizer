import "./App.css";
import AlgorithmnVisualizer from "./Visualizer/AlgorithmnVisualizer";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/styles-global";
import { useSelector } from "react-redux";

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
