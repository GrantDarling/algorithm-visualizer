import styled from "styled-components";

// const SubHead = styled.div<{ x: string }>` background: ${(props) => props.x}; `
const SubHead = styled.div`
  background: #67f5af;
  color: white;
  height: 50px;
  width: 100%;
`;

export const SubHeader = () => {
  return (
    <>
      <SubHead>SubHead</SubHead>
    </>
  );
};
