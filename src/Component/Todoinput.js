import React from 'react'

export const Todoinput = ({adddata}) => {
    const [inputvalue,setinputvalue] = React.useState("")
  return <>
  <div>
    <h1>Toda List</h1>
    <input placeholder='Add TODO' value={inputvalue} onChange={(e) => setinputvalue(e.target.value)} type="text" />
    <button onClick={()=> {adddata(inputvalue)}}>Save TODO</button>
  </div>
  </>
}
export default Todoinput
