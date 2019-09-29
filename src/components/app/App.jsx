import * as React from 'react';
import Head from '../head/Head';
import AppCss from '../../css/app/app.css';
import Footer from '../footer/footer';
import {HashRouter,Route} from 'react-router-dom';
import Home from '../home/Home';
import Product from '../product/Product';
import Success from '../success/Success';
import AboutUs from '../aboutUs/AboutUs';
import twoDistrict from '../twoDistrict/twoDistrict';

const DataArr = [
    {id:Home,path:"/"},
    {id:Home,path:"/home"},
    {id:Product,path:"/product"},
    {id:Success,path:"/success"},
    {id:AboutUs,path:"/aboutUs"},
    {id:twoDistrict,path:"/twoproduct"}

]

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            flag:true
        }
    }
    render(){
        return(
            <HashRouter>
                <div className={AppCss.container}>
                    <Head></Head>
                    {DataArr.map((ele,index)=>
                        {if(index==0){
                            return <Route path={ele.path} component={ele.id} key={index} exact></Route>
                        }else{
                            return <Route path={ele.path} component={ele.id} key={index}></Route>
                        }}   
                    )}
                    <Footer></Footer>
                </div>
            </HashRouter>
        )
    }
}

export default App;