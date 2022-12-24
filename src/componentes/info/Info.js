import React from 'react'
import "./Info.css";
import datas from '../../data/users.json';

const Info = () => {


    const f = datas.find((obj)=>{
    let newDate = new Date()
    let d = newDate.getDate()
    return obj.id === d;
    })

  

  return (
    <div className="info-container">
    <div className='info'>
    <h1>"{f.texto}"</h1>
    </div>
    </div>
  )
}

export default Info;