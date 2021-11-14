import { main } from "../style/styles-themes";

export const initialState: GlobalState = {
  start: false,
  gridSize: 20,
  algorithm: {
    type: "bubbleSort",
    timeComplexity: "O(n²)",
    spaceComplexity: "O(1)",
  },
  theme: main,
};
