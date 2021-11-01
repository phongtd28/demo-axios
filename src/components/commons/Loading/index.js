import React from "react";
import { LoadingWrapper } from "./style";
import LoadingIcon from "../../../assets/image/Ring-Loading.gif";

const Loading = () => {
  return (
    <LoadingWrapper>
      <img src={LoadingIcon} />
    </LoadingWrapper>
  );
};

export default Loading;
