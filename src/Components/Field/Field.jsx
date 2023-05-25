import React from "react";
import FieldLayout from "./FieldLayout";

export const Field = ({ fields, onCellClick }) => {
  return <FieldLayout fields={fields} onCellClick={onCellClick} />;
};
