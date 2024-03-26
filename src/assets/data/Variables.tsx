import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 25px;
  font-size: 40px;
  margin-bottom: 100px;
  color: white;
  cursor: default;
`;

export const GameStateContainer = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Line = styled.p<{ $color?: boolean | number }>`
  font-size: 1.5em;
  font-style: italic;
  padding-top: 0.5em;
  color: ${(props) => (props.$color ? "green" : "red")};
`;