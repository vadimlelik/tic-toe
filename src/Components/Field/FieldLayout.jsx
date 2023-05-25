import React from "react";
import style from "./Field.module.css";
import { PLAYER_SIGN } from "../../App";

const FieldLayout = ({ fields, onCellClick }) => {
  return (
    <div className={style.FieldLayout}>
      {fields.map((player, index) => (
        <div
          key={index}
          className={style.cell}
          onClick={() => onCellClick(index)}
        >
          {PLAYER_SIGN[player]}
        </div>
      ))}
    </div>
  );
};

export default FieldLayout;
