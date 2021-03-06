import React,{Component} from 'react';
import {connect} from 'react-redux';
import{
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,

}from './styled';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import List from './components/List';
import Writer from './components/Writer';
import {actionCreators} from './store/index';
class Home extends Component{
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){

        return(
            <HomeWrapper>
                <HomeLeft>
                <img className='banner-img' alt='' src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                <Topic/>
                <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll? <BackTop onClick = {this.handleScrollTop}>回到顶部</BackTop>:null }
               
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvents();
    }   
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }
}
const mapState = (state)=>({
    showScroll:state.getIn(['home','showScroll']),
})
const mapDispatch = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeInfo());
    
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop > 100){
            dispatch(actionCreators.toggleTopShow(true));
        }else{
            dispatch(actionCreators.toggleTopShow(false));
        }
    },
})
export default connect(mapState,mapDispatch)(Home);