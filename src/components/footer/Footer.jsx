import * as React from 'react';
import weixin from '@/weixin.png';
import phone from '@/phone.png';
import FooterCss from '../../css/footer/footer.css';
import {Link} from 'react-router-dom';

const info = '© Reserved 四川空间信息有限公司 版权所有  川ICP备 1280923-2  川公网安备 21312312344432号';
const routerAddrs = [ 
    "/home",
    "/product",
    "/success",
    "/aboutUs"
]
class Footer extends React.Component{
    constructor(){
        super()
        this.state={
            titleArr:[
                "首页",
                "产品介绍",
                "成功案例",
                "关于我们"
            ],
            endContentArr:[
                "法律声明",
                "联系我们",
                "空间信息官网"
            ],
        }
    }
    render(){
        return(
            <div className={FooterCss.footerBox}>
                <ul className={FooterCss.contentBox}>
                    {this.state.titleArr.map((ele,index)=>
                        <Link to={routerAddrs[index]} key={index}>{ele}</Link>
                    )}
                    <div>
                        <img src={weixin}/>
                        <img src={phone}/>
                    </div>
                </ul>
                {/* 底部  */}
                <ul className={FooterCss.endContent}>
                    <p>{info}</p>
                    <ul className={FooterCss.other}>
                        {this.state.endContentArr.map((ele,index)=>{
                            if(index<2){
                                return <li key={index}><a href="##">{ele}</a> <span>|</span>&nbsp;</li>
                            }else{
                                return <li key={index}><a href="##">{ele}</a></li>
                            }
                        })}
                     </ul>
                </ul>
            </div>
        )
    }
}

export default Footer;