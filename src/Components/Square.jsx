import React,{memo} from 'react'

const Square = memo((props) => {
  return(
    <>
      <button 
        type='button' 
        className='square'
        onClick={props.click}
      >
        {props.value}
      </button>
    </>
  )
})

export default Square