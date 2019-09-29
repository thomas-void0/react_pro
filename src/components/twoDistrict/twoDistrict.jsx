import React, { Component } from 'react'
import Common from '../common/common'
import logoImg2 from '@/juxing.png'
import twoCss from '../../css/twoDistrict/twoDistrict.css'
import Box from '../box/box'
import bgImage from '@/two.png'


const info = {
    img:bgImage,
    firstContent:"粮食生产功能区和重要农产品生产保护区",
    secondContent:"grain & important agricultural",
    detailContent:`叙述性文字叙述性文字叙述性文字叙述性文字，
                    叙述性文字叙述性文字叙述性文字叙述性文字叙述性文字。`
}

const BoxInfo=[
    {img:logoImg2,content:"监测监管系统"},
    {img:logoImg2,content:"调查平板"},
    {img:logoImg2,content:"建库工具"},
    {img:logoImg2,content:"数据库管理系统"}
]

export default class twoDistrict extends Component {
    render() {
        return (
            <div>
                <Common {...info}></Common>
                <div className={twoCss.contentBox}>
                    {BoxInfo.map((ele,index)=>
                       <Box key={index} {...ele}></Box> 
                    )}
                </div>
            </div>
        )
    }
}
