import styled from "styled-components";

const Head = styled.div<{ x: string }>`
  background: ${(props) => props.x};
  color: white;
  height: 100px;
  width: 100%;
`;

type HeaderProps = {
  x: null;
};

export const Header = ({ x }: HeaderProps) => {
  return <Head x={"pink"}></Head>;
};
