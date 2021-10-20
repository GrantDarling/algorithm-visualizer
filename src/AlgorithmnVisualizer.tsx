import { Grid } from "./Components/Grid/grid";
import { Header } from "./Components/Headers/header";
import { SubHeader } from "./Components/Headers/subheader";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

export const AlgorithmnVisualizer = () => {
  return (
    <Container>
      <Header />
      <SubHeader />
      <Grid columns={20} rows={20} />
    </Container>
  );
};
