import React from "react";
import styled from "styled-components";
import { BACKGROUND_COLOR } from "../constants/colors";

const WrapperView = styled.View`
  flex: 1;
`;

const Wrapper = props => {
  return <WrapperView>{props.children}</WrapperView>;
};
export default Wrapper;
