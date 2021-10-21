import styled from "styled-components";
import { Header } from "./Headers/header";
import { SubHeader } from "./Headers/subheader";
import { Grid } from "./Grids/grid";

const Visualizer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

export const AlgorithmnVisualizer = () => {
  return (
    <Visualizer>
      <Header />
      <SubHeader />
      <Grid columns={30} rows={30} />
    </Visualizer>
  );
};
