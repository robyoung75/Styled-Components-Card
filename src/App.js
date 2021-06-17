import Card from "./Card";

import styled, { css } from "styled-components";

const flexStyles = css`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

const Wrapper = styled.div`
  ${(props) => props.isFlex && flexStyles};
  background: ${(props) => props.background};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.borderRadius};
`;

export default function App() {
  return (
    <Wrapper
      backgroundColor="#121212"
      isFlex
      flexDirection="column"
      alignItems="center"
      color="rgba(255, 255, 255, .89)"
      height="100vh"
    >
      <h1>@learnMern</h1>
      <Wrapper
        isFlex
        flexDirection="column"
        background="#222222"
        justifyContent="center"
        alignItems="start"
        width="100%"
      >
        <h1 style={{ padding: "0 2rem" }}>Styled Components</h1>
        <h2 style={{ padding: "0 2rem" }}>Styled Card</h2>
      </Wrapper>

      <Card
        isFlex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        background="linear-gradient(315deg, #6681ea 0%, #7e43aa 74%)"
        width="400px"
        height="600px"
        border="1px solid #121212"
        borderRadius=".5rem"
        ccolor="rgba(255, 255, 255, .89)"
        padding="1rem"
        flexStyles={flexStyles}
        margin=" 2rem 0"
      >
        <h1>Card</h1>
        <h3>My Props Include:</h3>
        <ul style={{ listStyle: "none" }}>
          <li>children</li>
          <li>isFlex</li>
          <li>flexStyles</li>
          <li>justifyContent</li>
          <li>alignItems</li>
          <li>flexDirection</li>
          <li>background</li>
          <li>color</li>
          <li>width</li>
          <li>minWidth</li>
          <li>height</li>
          <li>minHeight</li>
          <li>children</li>
          <li>border</li>
          <li>borderRadius</li>
        </ul>
      </Card>
    </Wrapper>
  );
}
