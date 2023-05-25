import React from "react";
import { Field, Information } from "../../Components";
import style from "./../../App.module.css";
const GameLayout = ({ fields, currentPlayer, status, onCellClick }) => {
  return (
    <div className={style.App}>
      <Field fields={fields} onCellClick={onCellClick} />
      <Information currentPlayer={currentPlayer} status={status} />
      <button> Начать заново </button>
    </div>
  );
};

export default GameLayout;
