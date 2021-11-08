import { ShepherdTourContext } from "react-shepherd";
import { useContext } from "react";

export const useTours = () => {
  const tour: any = useContext(ShepherdTourContext);
  return { tour };
};

export default useTours;
