import { Visualizer } from "../styles/styles";
import { Header } from "./headers/header";
import { SubHeader } from "./headers/subheader";
import { Grid } from "./grid/grid";

export const AlgorithmnVisualizer = () => {
  return (
    <Visualizer>
      <Header />
      <SubHeader />
      <Grid columns={30} rows={30} />
    </Visualizer>
  );
};
