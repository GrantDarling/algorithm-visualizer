import { algorithms } from "../header-components/algorithm-selector/selector-business";
import { store } from "../../store";

export const findByTestAttribute = (component: any, attribute: string) => {
  const wrapper = component.find(`[data-test='${attribute}']`);
  return wrapper;
};

export const dispatchAlgorithm = (algorithmID: string) => {
  const algorithm = algorithms.find((algorithm) => {
    return algorithm.id === algorithmID;
  });
  return {
    type: "CHANGE_ALGORITHM",
    global: {
      ...store.getState(),
      algorithm: {
        type: algorithm.value,
        timeComplexity: algorithm.complexity.time,
        spaceComplexity: algorithm.complexity.space,
      },
    },
  };
};
