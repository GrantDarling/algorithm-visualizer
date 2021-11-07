import { createGrid } from "./grid-business";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const useGrid = () => {
  const global: IGlobal = useSelector((state: GlobalState) => state);
  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(
    () => setGrid(createGrid(global.gridSize, global.gridSize)),
    [global.gridSize]
  );

  return { grid };
};
