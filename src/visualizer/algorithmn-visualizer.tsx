import { Visualizer } from "../styles/styles-global";

import { Header } from "./header-components/header-wrapper/header-presentational";
import { Grid } from "./grid-components/grid/grid-presentational";
import { Contact } from "./contact";

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
