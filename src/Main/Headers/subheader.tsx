import { SubHead, VisualizeButton } from "../../styles/styles";
import { toggleStart } from "../../store/actionCreators";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { CreateGrid } from "./create-grid";
import { Complexity } from "./complexity";

export const SubHeader = () => {
  const start: IGlobal = useSelector((state: GlobalState) => {
    return {
      start: !state.start,
    };
  });

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <SubHead>
      <CreateGrid />
      <VisualizeButton onClick={() => dispatch(toggleStart(start))}>
        visualize
      </VisualizeButton>
      <Complexity />
    </SubHead>
  );
};
