import { SubHead, VisualizeButton } from "../../styles/styles";
import { toggleStart } from "../../store/actionCreators";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { CreateGrid } from "./create-grid";
import { Complexity } from "./complexity";
import { AlgorithmTypeSelector } from "./algorithm-type-selector";
import { AlgorithmSelector } from "./algorithm-selector";

import { Head } from "../../styles/styles";

export const Header = () => {
  const start: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      start: !state.start,
    };
  });

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <>
      <Head>Algorithm Visualizer</Head>
      <SubHead>
        <AlgorithmTypeSelector />
        <AlgorithmSelector />
        <VisualizeButton onClick={() => dispatch(toggleStart(start))}>
          visualize
        </VisualizeButton>
        <CreateGrid />
        <Complexity />
      </SubHead>
    </>
  );
};
