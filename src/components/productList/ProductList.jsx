import React, { Component } from 'react'
import List from './List'
import productListCss from '../../css/productList/productList.css';

const infoLeft = [
    {title:"农村土地承包经营权"},
    {dataArr:[
        "登记颁证系统",
        "纠纷仲裁系统",
        "监管分析系统",
        "接入系统",
        "数据库管理系统",
        "网签小程序",
        "流转管理系统",
        "流转交易平台",
        "抵押贷款系统",
        "上报系统"
    ]}
];
const infoRight = [
    {title:"粮食生产功能区和重要农产品生产保护区"},
    {dataArr:[
        "监测监管系统",
        "调查平板",
        "建库工具",
        "数据库管理系统",
    ]}
];

export default class productList extends Component {
    render() {
        return (
            <div className={productListCss.box}>
                <ul className={productListCss.navBox}>
                    <li><List {...infoLeft}></List></li>
                    <li><List {...infoRight}></List></li>
                </ul>
            </div>
        )
    }
}
