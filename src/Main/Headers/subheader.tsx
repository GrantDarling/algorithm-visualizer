import { SubHead, VisualizeButton } from "../../styles/styles";
import { toggleStart } from "../../store/actionCreators";
import { Dispatch } from "redux";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

export const SubHeader = () => {
  const start: IGlobal = useSelector((state: GlobalState) => {
    return {
      start: !state.start,
    };
  });

  const dispatch: Dispatch<any> = useDispatch();

  return (
    <SubHead>
      <VisualizeButton onClick={() => dispatch(toggleStart(start))}>
        visualize
      </VisualizeButton>
    </SubHead>
  );
};
