import React from "react";
import InformationLayout from "./InformationLayout";

export const Information = ({ currentPlayer, status }) => {
  return <InformationLayout status={status} currentPlayer={currentPlayer} />;
};
