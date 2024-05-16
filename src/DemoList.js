import React from 'react'
import classes from './DemoList.module.css'

const DemoList = ({ title, items })=>{


    return (
        <div className={classes.list}>
            <h2>{title}</h2>
        <ul>
            {items.map((item,index)=>(

            <li key={index}>{item}</li>

            ))}
        </ul>
        </div>
    )

}
export default DemoList;