import * as React from 'react';
import HeadCss from '../../css/head/head.css';
import logo from '@/Logo.png';
import {Link} from 'react-router-dom';
import ProductList from '../productList/ProductList';

const info = "研发二部";
const routerAddrs = [ 
    "/home",
    "/product",
    "/success",
    "/aboutUs"
]
class Head extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titleArr:[
                "首页",
                "产品介绍",
                "成功案例",
                "关于我们"
            ],
            flag:false
        }
        this.moveOut = this.moveOut.bind(this);
    }
    flagFT(bool){
        this.setState({
            flag:bool
        })
    }
    hover(e){
        let bool = null;
        if(e.target.name == "1"){
            if(this.state.flag == false){
                bool = true
            }else{
                bool = false
            }
        }else{
            bool = false
        }
        this.flagFT(bool);
    }
    moveOut(){
        this.flagFT(false);
    }
    render(){
        return(
            <div className={HeadCss.box}>
                <nav className={HeadCss.navBox}>
                    <div className={HeadCss.titleBox}>
                        <p className={HeadCss.firstTitle}>
                            <img className={HeadCss.logo} src={logo}/>
                            {info}
                        </p>
                        <ul className={HeadCss.noneLogoBox}>
                            {this.state.titleArr.map((ele,index)=>
                                <Link to={routerAddrs[index]} name={index} onMouseOver={(e)=>{this.hover(e)}} key={index}>{ele}</Link>    
                            )}
                        </ul>
                    </div>
                </nav>    
                {/*导航菜单 */}
                <div className={HeadCss.titleNav} onMouseLeave={()=>{this.moveOut()}}>
                    {this.state.flag ? <ProductList></ProductList> : null}
                </div>
            </div>

        )
    }
}

export default Head;