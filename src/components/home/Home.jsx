import React, { Component } from 'react'
import homeCss from '../../css/home/home.css';
import bgImg from '@/home.png';
import arrowImg from '@/arrow.png';
import appStore from '@/appStore.png';
import build from '@/build.png';
import successImg from '@/successImg.png';
import fourImg from '@/4.png';
import fiveImg from '@/5.png';
import serverImg from '@/borderOuter.png';
import img1 from '@/合作1.png';
import img2 from '@/合作2.png';
import img3 from '@/合作3.png';
import img4 from '@/合作4.png';
import img5 from '@/合作5.png';
import img6 from '@/合作6.png';
import img7 from '@/合作7.png';
import img8 from '@/合作8.png';

const title = "产品介绍";
const more = "了解更多";
const firstInfo = [
    "农村土地承包经营权",
    "Rural Land Contractual"
]

const secondInfo = [
    "粮食生产功能区",
    "和重要农产品生产保护区",
    "grain & important agricultural"
]
const title2 = "成功案例";

const contentInfo = [
    "案例名称案例名称案例名称案例名称案例名称",
    "内容概述内容概述内容概述内容概述内容概述内容概述内容概述内容概述内容概述内容概述内。",
    "查看详情"
]

const title3 = "服务对象";

const imgArr=[img1,img2,img3,img4,img5,img6,img7,img8]

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className={homeCss.imgBox}>
                    <img src={bgImg}/>
                    <ul>
                        <li>{more}</li>
                        &nbsp;
                        <li><img src={arrowImg}/></li>
                    </ul>
                </div>
                <div className={homeCss.box}>
                    <div className={homeCss.contentBox}>
                        <p className={homeCss.btn}>
                            <img src={appStore} />
                            <span>{title}</span>
                        </p>
                        <ul>
                            <li>
                                <p className={[homeCss.title,homeCss.mar197].join(' ')}>{firstInfo[0]}</p>
                                <p className={homeCss.info}>{firstInfo[1]}</p>
                            </li>
                            <li>
                                <p className={[homeCss.title,homeCss.mar169].join(' ')}>{secondInfo[0]}</p>
                                <p className={homeCss.title}>{secondInfo[1]}</p>
                                <p className={homeCss.info}>{secondInfo[2]}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 成功案例 */}
                <div className={homeCss.successBox}>
                    {/* nav */}
                    <div>
                        <ul className={homeCss.headLeft}>
                            <li><img src={build}/></li>
                            <li>{title2}</li>
                        </ul>
                        <ul className={homeCss.headRight}>
                            <li>{more}</li>
                            <li><img src={arrowImg}/></li>
                        </ul>
                    </div>
                </div>
                {/* content */}
                <div className={homeCss.successContentBox}>
                    <ul>
                        <li><img src={successImg}/></li>
                        <li>
                            <div>
                                <p className={homeCss.successText}>{contentInfo[0]}</p>
                                <p>{contentInfo[1]}</p>
                                <a>{contentInfo[2]}</a>
                            </div>
                        </li>
                        <li><img src={fourImg}/></li>
                        <li>
                            <div>
                                <p className={homeCss.successText}>{contentInfo[0]}</p>
                                <p>{contentInfo[1]}</p>
                                <a>{contentInfo[2]}</a>                                
                            </div>
                        </li>
                        <li><img src={fiveImg}/></li>
                        <li>
                            <div>
                                <p className={homeCss.successText}>{contentInfo[0]}</p>
                                <p>{contentInfo[1]}</p>
                                <a>{contentInfo[2]}</a>                                
                            </div>
                        </li>
                    </ul>
                </div>
                {/* 合作伙伴 */}
                <div className={homeCss.partnerBox}>
                    <ul>
                        <li><img src={serverImg}/></li>
                        <li>{title3}</li>
                    </ul>
                    <ul className={homeCss.imgPartner}>
                        {imgArr.map((ele,index)=>
                            <li key={index}><img src={ele}/></li>    
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}
