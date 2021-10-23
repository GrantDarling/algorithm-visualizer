import styled from "styled-components";

export const Visualizer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

/* Headers */

export const Head = styled.div`
  background: #f5bc4e;
  color: white;
  height: 50px;
  width: 100%;
`;

export const SubHead = styled.div`
  background: #67f5af;
  color: white;
  height: 50px;
  width: 100%;
`;

/* Columns */

interface SortingColumnInterface {
  height: number;
}

export const Column = styled.div<SortingColumnInterface>`
  background: white;

  .node:nth-last-child(-n + ${(props) => props.height}) {
    background: #f7b2c6;
  }

  &.active .node:nth-last-child(-n + ${(props) => props.height}) {
    background: #f5bc4e;
  }
`;
