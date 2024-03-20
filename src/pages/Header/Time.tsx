import { useState, useEffect } from "react";
import styled from "styled-components";

const TimeDesign = styled.div<{ $render: boolean }>`
  visibility: ${(props) => (props.$render ? "visible" : "hidden")};
  left: 50px;
  position: absolute;
  margin-right: auto;
  color: #cdcdcd;
  font-size: 25 px;
  font-family: "PS", sans-serif;
`;

interface Props {
  lang: string;
}

const Time = ({ lang }: Props) => {
  const [time, setTime] = useState(new Date());
  const shouldRender = window.innerWidth < 800;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <TimeDesign $render={!shouldRender}>
        <>{time.toLocaleDateString(lang)}</>
        <br />
        <>{time.toLocaleTimeString(lang)}</>
      </TimeDesign>
    </>
  );
};
export default Time;
