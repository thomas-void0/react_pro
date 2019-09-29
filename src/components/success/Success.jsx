import React, { Component } from 'react'
import Common from '../common/common';
import bgImage from '@/success.png';
import successCss from '../../css/success/success.css';
import successImage from '@/successImg.png';
const info = {
    img:bgImage,
    firstContent:"成功案例",
    secondContent:"Successful cases",
    detailContent:`叙述性文字叙述性文字叙述性文字叙述性文字，
                    叙述性文字叙述性文字叙述性文字叙述性文字叙述性文字。`
}

const contentArr=[
    {img:successImage,title:"华宇助力北京市人民检察院打造“新型检察管理监督机制”",time:"发布时间：2019-09-05  10:00:00",content:"检察管理监督平台是在司法体制改革的大背景下，结合新型检察管理监督机制，为提升统筹、管理、监督、服务的实际效用而研发建设的平台，平台汇集所有检察业务管理监督功能。"},
    {img:successImage,title:"华宇助力北京市人民检察院打造“新型检察管理监督机制”",time:"发布时间：2019-09-05  10:00:00",content:"检察管理监督平台是在司法体制改革的大背景下，结合新型检察管理监督机制，为提升统筹、管理、监督、服务的实际效用而研发建设的平台，平台汇集所有检察业务管理监督功能。"},
    {img:successImage,title:"华宇助力北京市人民检察院打造“新型检察管理监督机制”",time:"发布时间：2019-09-05  10:00:00",content:"检察管理监督平台是在司法体制改革的大背景下，结合新型检察管理监督机制，为提升统筹、管理、监督、服务的实际效用而研发建设的平台，平台汇集所有检察业务管理监督功能。"},
    {img:successImage,title:"华宇助力北京市人民检察院打造“新型检察管理监督机制”",time:"发布时间：2019-09-05  10:00:00",content:"检察管理监督平台是在司法体制改革的大背景下，结合新型检察管理监督机制，为提升统筹、管理、监督、服务的实际效用而研发建设的平台，平台汇集所有检察业务管理监督功能。"},
    {img:successImage,title:"华宇助力北京市人民检察院打造“新型检察管理监督机制”",time:"发布时间：2019-09-05  10:00:00",content:"检察管理监督平台是在司法体制改革的大背景下，结合新型检察管理监督机制，为提升统筹、管理、监督、服务的实际效用而研发建设的平台，平台汇集所有检察业务管理监督功能。"},
]

export default class Success extends Component {
    render() {
        return (
            <div>
                <Common {...info}></Common>
                <div className={successCss.box}>
                    {contentArr.map((ele,index)=>
                    (<div key={index}>
                        <p><img className={successCss.imgCss} src={ele.img}/></p>
                        <ul>
                            <li className={successCss.title}>{ele.title}</li>
                            <li className={successCss.txt}>{ele.time}</li>
                            <li className={successCss.txt}>{ele.content}</li>
                        </ul>
                    </div>)
                    )}
                </div>
            </div>
        )
    }
}
