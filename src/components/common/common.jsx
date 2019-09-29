import React from 'react'
import CommonCss from '../../css/common/common.css'
 
const Common =  props =>{
    return (
        <div className={CommonCss.box} style={{backgroundImage:`url(${props.img})`}}>
            <ul className={CommonCss.contentBox}>
                <li>{props.firstContent}</li>
                <li>{props.secondContent}</li>
            </ul>
            <p>{props.detailContent}</p>
        </div>
    )
}
export default Common