import { CreateGridContainer } from "../../styles/styles";

export const CreateGrid = () => {
  return (
    <CreateGridContainer>
      <label htmlFor="grid-size">Array_Size</label>
      <input type="text" name="grid-size" placeholder="Max: 100" />
    </CreateGridContainer>
  );
};
