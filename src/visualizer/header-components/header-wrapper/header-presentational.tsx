import { CreateGrid } from "../create-grid/create-grid-presentational";
import { Complexity } from "../complexity/complexity-presentational";
import { AlgorithmTypeSelector } from "../algorithm-type-selector/type-selector-presentation";
import { AlgorithmSelector } from "../algorithm-selector/selector-presentation";
import { Head, SubHead, VisualizeButton } from "./header-styles";
import { Tours } from "../tours/tours-presentational";

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
          id="visualization-button"
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
