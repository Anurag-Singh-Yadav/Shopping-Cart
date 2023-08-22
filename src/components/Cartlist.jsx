import React from 'react'
import{ AiTwotoneDelete }from 'react-icons/ai'
export default function Cartlist({key,item}) {
  return (
    <div>
      <div><img src={item.image} alt=''></img></div>
      <div>
        <div>{item.title}</div>
        <div>{item.discription}</div>
        <div>
            <div>{item.price}</div>
            <button><AiTwotoneDelete></AiTwotoneDelete></button>
        </div>
      </div>
    </div>
  )
}
