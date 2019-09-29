import React from 'react'
import ListCss from '../../css/productList/list.css';
import {Link} from 'react-router-dom';
let add = null;
const List = props => {
    if(props[0].title == "农村土地承包经营权"){
        add ="/product";
    }else{
        add ="/twoproduct";
    }
    return (
        <div className={ListCss.box}>
            <p><Link to={add}>{props[0].title}</Link></p>
            <ul className={ListCss.left}>
                {props[1].dataArr.map((ele,index)=>
                    <li key={index}>{ele}</li>
                )}
            </ul>
        </div>
    )
}
export default List
