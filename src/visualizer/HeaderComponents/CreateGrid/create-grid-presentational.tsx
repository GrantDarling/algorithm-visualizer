import { CreateGridContainer } from "./create-grid-styles";
import useCreateGridImplementation from "./create-grid-implementation";

export const CreateGrid = () => {
  const { handleInputChange, grid, limit } = useCreateGridImplementation();
  return (
    <CreateGridContainer id="create-grid" data-test="create-grid">
      <label htmlFor="grid-size" data-test="create-grid-label">
        Array_Size
      </label>
      <input
        type="number"
        name="grid-size"
        value={Number(grid)}
        onChange={(e) => handleInputChange(e, limit)}
        data-test="create-grid-input"
      />
    </CreateGridContainer>
  );
};
