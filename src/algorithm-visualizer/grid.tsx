import React from "react"; // we need this to make JSX compile

type GridProps = {
  rows: number;
  columns: number;
};

export const Grid = ({ rows, columns }: GridProps) => {
  const a = [rows, columns];
  return (
    <aside>
      {a.map((el, idx) => {
        return (
          <div key={idx} className="node">
            {el}
          </div>
        );
      })}
      <h1>{a}</h1>
    </aside>
  );
};
