import React from "react";
import styled from "styled-components";
import { BACKGROUND_COLOR } from "../constants/colors";

const ScreenView = styled.View`
  flex: 1;
  padding: 16px;
  background-color: ${BACKGROUND_COLOR};
`;

const Screen = props => {
  return <ScreenView>{props.children}</ScreenView>;
};
export default Screen;
