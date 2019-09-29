import React, { Component } from 'react'
import Common from '../common/common';
import bgImage from '@/aboutus.png';
import aboutUsCss from '../../css/aboutUs/aboutUs.css';


const info = {
    img:bgImage,
    firstContent:"关于我们",
    secondContent:"About us",
    detailContent:`叙述性文字叙述性文字叙述性文字叙述性文字，
                    叙述性文字叙述性文字叙述性文字叙述性文字叙述性文字。`
}

const infoArr = {
    departmentInfo:"部门介绍",
    departmentDetails:`描述性文字描述性文字描述性文字描述性文字描述性文字，
                        描述性文字描述性文字描述性文字描述性文字，描述性文字描述性文字描述性文字。
                        描述性文字描述性文字描述性文字描述性文字描述性文字描，
                        述性文字描述性文字描述性文字描述性文字描述性文字，
                        描述性文字描述性文字描述性文字描述性文字，描述性文字描述性文字描述性文字。
                        描述性文字描述性文字描述性文字描述性文字描述性文字描述性文字，
                        描述性文字描述性文字描述性文字描述性文字描述性文字。
                        描述性文字描述性文字描述性文字。`,
    missionInfo:"使命",
    missionDetails:"描述性文字描述性文字描述性文字描述性文字描述性文字。",
    visionInfo:"愿景",
    visionDetails:"描述性文字描述性文字描述性文字描述性文字描述性文字。",
    senseOfWorthInfo:"价值观",
    senseOfWorthDetails:"描述性文字描述性文字描述性文字描述性文字描述性文字。"

}


export default class AboutUs extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Common {...info}></Common>
                <div className={aboutUsCss.contentBox}>
                    <p>{infoArr.departmentInfo}</p>
                    <p>{infoArr.departmentDetails}</p>
                </div>
                <div className={aboutUsCss.titleBox}>
                    <div className={aboutUsCss.bottomBox}>
                        <ul>
                            <li>{infoArr.missionInfo}</li>
                            <li>{infoArr.missionDetails}</li>
                        </ul>
                        <ul>
                            <li>{infoArr.visionInfo}</li>
                            <li>{infoArr.visionDetails}</li>
                        </ul>
                        <ul>
                            <li>{infoArr.senseOfWorthInfo}</li>
                            <li>{infoArr.senseOfWorthDetails}</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
