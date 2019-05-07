import React, { Fragment,Component } from 'react';
import { connect } from 'react-redux';
import {actionCreators} from './store';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
} from './style';
import * as loginAction  from '../../pages/login/store/actionCreators';
class Header extends Component{
    getListArea(){
        const  {page,list,} = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if(jsList.length){
            for(let i = (page-1)*10;i<page*10;i++){
                if(jsList[i]!=='' && jsList[i]!==undefined){
                pageList.push(
                    <SearchInfoItem key = {jsList[i]}>
                    {jsList[i]}
                    </SearchInfoItem>
                )
            }
        }
     
     return pageList;
    }
    }  
    render(){
        const {focused,handleInputFocus,handleInputBlur,mouseIn,handlePageChange,totalPage,page,handleMouseEnter,handleMouseLeave,list,login,logOut} = this.props;
        return(
< Fragment >
        <HeaderWrapper>
            <Link to='/'>
            <Logo />
            </Link>
            <Nav>
                <NavItem className='left active' >首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    login ?
                     <a href="#"><NavItem className='right' onClick={logOut}>退出</NavItem></a>:
                  <Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                }
                <NavItem className='right'>
                    <i className="iconfont">&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <NavSearch
                        className={focused ? 'focused' : ''}
                        onFocus={()=>handleInputFocus(list)}
                        onBlur={handleInputBlur}
                    >
                    </NavSearch>
                    <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6cf;</i>
                    <SearchInfo 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                    className={focused || mouseIn ? '' : 'hidden'}>
                        <SearchInfoTitle>热门搜索：
                      
                        <SearchInfoSwitch onClick = {()=>handlePageChange(page,totalPage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>
                        换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                          {
                                  this.getListArea()
                            //   this.props.list.map((item)=>{
                            //       return(
                            //       <SearchInfoItem key = {item}>{item}</SearchInfoItem>
                            //       )     
                            //   })
                          }
                        </SearchInfoList>
                    </SearchInfo>
                </SearchWrapper> 
            </Nav>
            
        </HeaderWrapper>
        <Addition>    
        <Link to='/write'>
        <Button className="writing"><i className="iconfont">&#xe615;</i>写文章</Button>
        </Link>    
        <Button className="reg">注册</Button>  
        </Addition>
    </Fragment >
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list:state.getIn(['header','list']), 
        page: state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            console.log(list);
            if(list.size <= 0){
                dispatch(actionCreators.getList());
            }        
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.MouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.MouseLeave());
        },
        handlePageChange(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,''); 
            if(originAngle){
                originAngle = parseInt(originAngle,10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.ChangePage(page+1));
            }else{
                dispatch(actionCreators.ChangePage(1));
            }
        },
        logOut(){
            dispatch(loginAction.logOut());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);