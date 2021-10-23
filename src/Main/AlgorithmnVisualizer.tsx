import { Visualizer } from "../Styles/styles";
import { Header } from "./Headers/header";
import { SubHeader } from "./Headers/subheader";
import { Grid } from "./Grid/grid";

export const AlgorithmnVisualizer = () => {
  return (
    <Visualizer>
      <Header />
      <SubHeader />
      <Grid columns={20} rows={20} />
    </Visualizer>
  );
};
