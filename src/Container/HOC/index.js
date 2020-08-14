import React from "react";
import { Container } from "react-bootstrap";

function HOC(props) {
  return (
    <Container
      style={{
        backgroundColor: "#edeff0",
      }}
    >
      {props.children}
    </Container>
  );
}

export default React.memo(HOC);
