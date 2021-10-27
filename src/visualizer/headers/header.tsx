import { CreateGrid } from "./create-grid";
import { Complexity } from "./complexity";
import { AlgorithmTypeSelector } from "./algorithm-type-selector";
import { AlgorithmSelector } from "./algorithm-selector";

// styles
import { Head, SubHead, VisualizeButton } from "../../styles/styles";

// redux
import { toggleStart } from "../../store/actionCreators";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const start: IGlobal = useSelector((state: GlobalState) => {
    return {
      ...state,
      start: !state.start,
    };
  });
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
