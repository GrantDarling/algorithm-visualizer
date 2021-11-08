import { Visualizer } from "../styles/styles-global";

import { Header } from "./HeaderComponents/HeaderWrapper/header-presentational";
import { Grid } from "./GridComponents/Grid/grid-presentational";
import { Contact } from "./Contact";

const AlgorithmnVisualizer = () => {
  return (
    <Visualizer>
      <Header />
      <Grid />
      <Contact />
    </Visualizer>
  );
};

export default AlgorithmnVisualizer;
