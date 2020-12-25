import React, { useState, useCallback, useEffect } from 'react'
import Square from './Square'

const Board = () => {
  const [values, setValues] = useState(Array(9).fill(null))
  const [player, setPlayer] = useState('✕')

  const RenderSquare = (props) => {
    const newValues = values.slice()
    newValues[props.number] = player
    const handleClick = useCallback(() => {
      if (values[props.number] === null) {
        setValues(newValues)
        setPlayer(player === '◯' ? '✕' : '◯')
      }
    }
      , [])
    return <Square value={values[props.number]} click={handleClick} />
  }
  const checkWinner = (array) => {
    const rows = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    console.log(rows)
    for (let i = 0; i < rows.length; i++) {
      if (array[rows[i][0]] && array[rows[i][0]] === array[rows[i][1]] && array[rows[i][1]] === values[rows[i][2]]) {
        return array[rows[i][0]]
      }
    }
    return null
  }
  let win = checkWinner(values)?checkWinner(values):""
  const status = 'Next player : ' + player
  const winner = 'winner : ' + win
  return (
    <>
      <div className='status'>{status}</div>
      <div className='status'>{winner}</div>
      <div className='board-row'>
        <RenderSquare number={0} />
        <RenderSquare number={1} />
        <RenderSquare number={2} />
      </div>
      <div className='board-row'>
        <RenderSquare number={3} />
        <RenderSquare number={4} />
        <RenderSquare number={5} />
      </div>
      <div className='board-row'>
        <RenderSquare number={6} />
        <RenderSquare number={7} />
        <RenderSquare number={8} />
      </div>
    </>
  )
}

export default Board