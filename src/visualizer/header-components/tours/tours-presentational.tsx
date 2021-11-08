import useTours from "./tours-implementation";
import { tourOptions, steps } from "./tours-business";
import { ToursContainer } from "./tours-styles";

function Button() {
  const { tour } = useTours();
  return (
    <button className="button dark" onClick={tour.start}>
      Take The Tour!
    </button>
  );
}

export const Tours = () => {
  return (
    <ToursContainer steps={steps} tourOptions={tourOptions}>
      <Button />
    </ToursContainer>
  );
};
