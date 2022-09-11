import styled from "styled-components";
import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";

import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";

const ContainerList = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default class Category extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Title/>
        <ContainerList>
          <Card setCurrentItem={this.props.setCurrentItem} />
        </ContainerList>
      </div>
    );
  }
}
