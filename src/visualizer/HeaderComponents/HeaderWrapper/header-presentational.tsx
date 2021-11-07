import { CreateGrid } from "../CreateGrid/create-grid-presentational";
import { Complexity } from "../Complexity/complexity-presentational";
import { AlgorithmTypeSelector } from "../AlgorithmTypeSelector/type-selector-presentation";
import { AlgorithmSelector } from "../AlgorithmSelector/selector-presentation";
import { Head, SubHead, VisualizeButton } from "./header-styles";
import { Tours } from "../Tours/tours-presentational";

import useHeaderImplementation from "./header-implementation";

export const Header = () => {
  const { setStart, visualizerText, start } = useHeaderImplementation();
  return (
    <>
      <Head data-test="head">
        Algorithm Visualizer
        <Tours />
      </Head>
      <SubHead data-test="subhead">
        <AlgorithmTypeSelector data-test="algorithm-type-selector" />
        <AlgorithmSelector data-test="algorithm-selector" />
        <VisualizeButton
          data-test="visualizer-button"
          onClick={() => setStart(start)}
        >
          {visualizerText}
        </VisualizeButton>
        <CreateGrid data-test="create-grid" />
        <Complexity data-test="complexity" />
      </SubHead>
    </>
  );
};
