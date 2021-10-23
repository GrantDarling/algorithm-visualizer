type RowProps = {
  row: number[];
};

export const Row = ({ row }: RowProps) => {
  return (
    <>
      {row.map((_, idx) => {
        return <div key={idx} className="node"></div>;
      })}
    </>
  );
};
