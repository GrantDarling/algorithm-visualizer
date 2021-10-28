import { CreateGrid } from "./create-grid";
import { Complexity } from "./complexity";
import { AlgorithmTypeSelector } from "./algorithm-type-selector";
import { AlgorithmSelector } from "./algorithm-selector";
import { Head, SubHead, VisualizeButton } from "../../styles/styles";

import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { toggleStart } from "../../store/actionCreators";

export const Header = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const globalState = useSelector((state: GlobalState) => state);

  return (
    <>
      <Head>Algorithm Visualizer</Head>
      <SubHead>
        <AlgorithmTypeSelector />
        <AlgorithmSelector />
        <VisualizeButton onClick={() => dispatch(toggleStart(globalState))}>
          visualize
        </VisualizeButton>
        <CreateGrid />
        <Complexity />
      </SubHead>
    </>
  );
};
