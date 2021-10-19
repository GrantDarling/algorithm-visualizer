type RowProps = {
  row: number[];
};

export const Row = ({ row }: RowProps) => {
  return (
    <>
      {row.map((node, idx) => {
        return (
          <div key={idx} className="node">
            {node}
          </div>
        );
      })}
    </>
  );
};
