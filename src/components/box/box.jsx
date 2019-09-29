import React from 'react'
import boxCss from '../../css/box/box.css'

const Box = props=> {
    return (
        <div className={boxCss.box}>
            <ul>
                <li><img src={props.img}/></li>
                <li>{props.content}</li>
            </ul>
        </div>
    )
}
export default Box;
