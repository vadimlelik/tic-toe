import React from "react";
import style from "./Information.module.css";
import { PLAYER_ACTION, PLAYER_NAME } from "../../App";

const InformationLayout = ({ currentPlayer, status }) => {
  const info = `${PLAYER_ACTION[status]} ${PLAYER_NAME[currentPlayer]}`;

  return <div className={style.InformationLayout}> {info} </div>;
};

export default InformationLayout;
