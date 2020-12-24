import React, {useState, useCallback} from 'react'
import Square from './Square'

const Board = () => {
  const [values, setValues] = useState(Array(9).fill(null))
  
  const RenderSquare = (props) => {
    // console.log(values)
    const newValues = values.slice()
    console.log(newValues)
    newValues[props.number] = 'X'
    const handleClick = useCallback(() => setValues(newValues),[])
    console.log(values)
    return <Square value={values[props.number]} click={handleClick}/>
  }
  const status = 'Next player: X'
  return(
    <>
    {/* <button type='button' onClick={()=>{console.log(values)}}>console</button> */}
      <div className='status'>{status}</div>
      <div className='board-row'>
        <RenderSquare number={0}/>
        <RenderSquare number={1}/>
        <RenderSquare number={2}/>
        {/* {renderSquare(1)}
        {renderSquare(2)} */}
      </div>
      <div className='board-row'>
      <RenderSquare number={3}/>
      <RenderSquare number={4}/>
      <RenderSquare number={5}/>
        {/* {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)} */}
      </div>
      <div className='board-row'>
      <RenderSquare number={6}/>
      <RenderSquare number={7}/>
      <RenderSquare number={8}/>
        {/* {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)} */}
      </div>
    </>
  )
}

export default Board