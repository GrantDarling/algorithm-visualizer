import { Visualizer } from "../styles/styles";

import { Header } from "./HeaderComponents/HeaderWrapper/header-presentational";
import { Grid } from "./grid/grid";

const AlgorithmnVisualizer = () => {
  return (
    <Visualizer>
      <Header />
      <Grid />
    </Visualizer>
  );
};

export default AlgorithmnVisualizer;
