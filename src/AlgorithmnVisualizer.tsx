import { Grid } from "./Components/Grid/grid";
import { Header } from "./Components/Header/header";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;
type AlgorithmnVisualizerProps = {
  x: null;
};

export const AlgorithmnVisualizer = ({ x }: AlgorithmnVisualizerProps) => {
  return (
    <Container>
      <Header x={null} />
      <Grid columns={10} rows={20} />
    </Container>
  );
};
