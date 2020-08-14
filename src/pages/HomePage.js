import React, { PureComponent } from "react";

//Local Components
import Container from "../Container/HOC";
import Header from "../components/HomePageComponents/Header/Header";

export default class HomePage extends PureComponent {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#edeff0",
        }}
      >
        {/**
         * Header
         */}
        <Header />
        <Container>hello</Container>
      </div>
    );
  }
}
