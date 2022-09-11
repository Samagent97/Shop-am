import React, { Component } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  height: 10rem;
  width:100%
`;
const SectionWriteup = styled.h2`
  position: absolute;
  left: 4.5rem;
  top: 5rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 30px;
  color: #1d1f22;
`;
export default class Title extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionWriteup> Shop4Una</SectionWriteup>
      </SectionContainer>
    );
  }
}
