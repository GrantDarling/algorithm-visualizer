import styled from "styled-components";

export const Visualizer = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto auto 1fr;
`;

/* Headers */

export const Head = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-family: "Share Tech Mono", monospace;
  background: black;
  color: white;
  height: 50px;
  width: 100%;
  font-size: 23px;
`;

export const SubHead = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  column-gap: 100px;
  background: #1c1c1c;
  justify-content: center;
  align-items: center;
  font-family: "Share Tech Mono", monospace;
  background: rgb(44, 20, 73);
  background: radial-gradient(
    circle,
    rgba(44, 20, 73, 1) 0%,
    rgba(58, 3, 68, 1) 51%,
    rgba(42, 0, 49, 1) 100%
  );
  color: white;
  height: 75px;
  width: 100%;
`;

export const CreateGridContainer = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr;

  label {
    padding: 6px;
  }
`;

export const ComplexityContainer = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr;
  padding: 6px;
`;

export const AlgorithmTypeSelectorContainer = styled.div`
  background: black;
`;

export const AlgorithmSelectorContainer = styled.div`
  background: black;
`;

export const Button = styled.button`
  color: #0d6349;
  font-family: "Share Tech Mono", monospace;
  border: 0;
`;

export const VisualizeButton = styled(Button)`
  color: pink;
  transition: 0.25s;
  border: solid 1px red;

  &:hover {
    border: solid 1px green;
    color: #fff;
  }

  &:hover {
    animation: pulse 1s;
  }
  &:active {
    background: gold;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 red;
    }
    50% {
      box-shadow: 0 0 0 1em #ff990000;
    }
  }

  padding: 8px 30px;
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

  background: #1c1c1c;

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
    background: #0d6349;
    opacity: 0.8;
    box-shadow: none;
  }
`;
