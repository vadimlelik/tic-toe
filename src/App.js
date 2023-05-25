
import { useState } from 'react';
import GameLayout from './Layout/GameLayout/GameLayout';
import { checkWin } from './utils/utils';



const STATUS = {
  TURN: 0,
  WIN: 1,
  DRAW: 2
}
const PLAYER = {
  CROSS: 0,
  NOUGHT: 1,
  NOBODY: 2
}
export const PLAYER_ACTION = {
  [STATUS.TURN]: 'Ходит',
  [STATUS.WIN]: 'Победил'
}
export const PLAYER_NAME = {
  [PLAYER.CROSS]: 'Крестик',
  [PLAYER.NOUGHT]: 'Нолик'
}
export const PLAYER_SIGN = {
  [PLAYER.CROSS]: 'X',
  [PLAYER.NOUGHT]: '0',
  [PLAYER.NOBODY]: ''

}

function App() {

  const [status, setStatus] = useState(STATUS.TURN)
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS)
  const [fields, setFields] = useState(new Array(9).fill(PLAYER.NOBODY))

  const onCellClick = (index) => {
    if (status === STATUS.WIN || status === STATUS.DRAW || fields[index] !== PLAYER.NOBODY) {
      return
    }
    const newField = [...fields]

    newField[index] = currentPlayer

    if (checkWin(newField, currentPlayer)) {
      setStatus(STATUS.WIN)
    } else if (newField.some((field) => field === PLAYER.NOBODY)) {
      setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS)
    } else {
      setStatus(STATUS.DRAW)
    }
    setFields(newField)
  }


  return (
    <GameLayout currentPlayer={currentPlayer} status={status} fields={fields} onCellClick={onCellClick} />)
}

export default App;
