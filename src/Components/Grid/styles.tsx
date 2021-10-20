import styled from "styled-components";

interface SortingColumnInterface {
  length: number;
}

const Column = styled.div`
  background: white;
`;

export const SortingColumnStyled = styled(Column)<SortingColumnInterface>`
  .node:nth-last-child(-n + ${(props) => props.length}) {
    background: #f7b2c6;
  }
`;
