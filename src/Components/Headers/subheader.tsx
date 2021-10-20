import styled from "styled-components";

type SubHeaderProps = {
  x: null;
};

const SubHead = styled.div<{ x: string }>`
  background: ${(props) => props.x};
  color: white;
  height: 50px;
  width: 100%;
`;

export const SubHeader = ({ x }: SubHeaderProps) => {
  return (
    <>
      <SubHead x={"#67F5AF"}>SubHead</SubHead>
    </>
  );
};
