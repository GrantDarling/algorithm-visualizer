import { Visualizer } from "../styles/styles";
import { Header } from "./HeaderComponents/header";
import { Grid } from "./grid/grid";

export const AlgorithmnVisualizer = () => {
  return (
    <Visualizer>
      <Header />
      <Grid />
    </Visualizer>
  );
};
