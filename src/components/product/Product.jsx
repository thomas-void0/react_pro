import React, { Component } from 'react'
import bgImage from '@/product1.png'
import Common from '../common/common'
import Box from '../box/box'
import logoImg1 from '@/tongji.png'
import logoImg2 from '@/juxing.png'
import productCss from '../../css/product/product.css';

const info = {
    img:bgImage,
    firstContent:"农村土地承包经营权",
    secondContent:"Rural Land Contractual",
    detailContent:`叙述性文字叙述性文字叙述性文字叙述性文字，
                    叙述性文字叙述性文字叙述性文字叙述性文字叙述性文字。`
}

const BoxInfo=[
    {img:logoImg1,content:"监管分析系统"},
    {img:logoImg2,content:"登记颁证系统"},
    {img:logoImg2,content:"流转管理系统"},
    {img:logoImg2,content:"抵押贷款系统"},
    {img:logoImg2,content:"纠纷仲裁系统"},
    {img:logoImg2,content:"流转交易平台"},
    {img:logoImg2,content:"上报系统"},
    {img:logoImg2,content:"接入系统"},
    {img:logoImg2,content:"网签小程序"},
    {img:logoImg2,content:"数据库管理系统"}
]

export default class Product extends Component {
    render() {
    console.log("this.props.flag==",this.props.flag)
        return (
            <div>
                <Common {...info}></Common>
                <div className={productCss.contentBox}>
                    {BoxInfo.map((ele,index)=>
                       <Box key={index} {...ele}></Box> 
                    )}
                </div>
            </div>
        )
    }
}
