import styled from "styled-components";

export const Visualizer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

/* Columns */

interface SortingColumnInterface {
  height: number;
  color: string;
}

export const Column = styled.div<SortingColumnInterface>`
  @keyframes colorGradient {
    0% {
      border-right: solid #540363 1px;
      border-bottom: solid #540363 1px;
    }
    50% {
      border-right: solid #0d6349 1px;
      border-bottom: solid #0d6349 1px;
    }
    100% {
      border-right: solid #540363 1px;
      border-bottom: solid #540363 1px;
    }
  }

  .node {
    animation: colorGradient 10s infinite;
  }

  .node:nth-last-child(-n + ${(props) => props.height}) {
    background: ${(props) => props.color};
    animation: colorGradient 10s infinite;
    border-bottom: none !important;
  }

  .node:nth-last-child(${(props) => props.height}) {
    border-radius: 80% 0 0 0;
  }

  &.active {
    background: black;
  }

  &.active .node:nth-last-child(-n + ${(props) => props.height}) {
    background: #1cdda3;
    opacity: 0.8;
    box-shadow: none;
  }
`;
