import React from 'react'

export const Tododata = ({data}) => {
  return <div>{
    data.map((item)=>{
      return  <h1 key={item.id}>{item.title}</h1>
    })
  }</div>

}
export default Tododata

