import styled from "styled-components";

const Head = styled.div<{ x: string }>`
  background: ${(props) => props.x};
  color: white;
  height: 50px;
  width: 100%;
`;

type HeaderProps = {
  x: null;
};

export const Header = ({ x }: HeaderProps) => {
  return (
    <>
      <Head x={"#F5BC4E"}>Head</Head>
    </>
  );
};
