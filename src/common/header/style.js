import styled from 'styled-components';
import logPic from '../../statics/jianshu-logo.png'

export const HeaderWrapper = styled.div`
    height:58px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
    z-index:1;
`;
export const Logo = styled.div`
    height:56px;
    position: absolute;
    top: 0;
    left: 0;
    width:100px
    display:block;
    background: url(${logPic});
    background-size:contain;
`;
export const Nav = styled.div`
    width:960px;
    height:100%
    margin: 0 auto;
    
`;
export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size: 17px;
    color:#333;
    &.left{
        float:left;
    };
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        bottom:5px
        width:30px;
        line-height:25px;
        border-radius:15px;
        text-aline:center;
        padding-left:7px;
        box-sizing:border-box;
        &.focused{
            background:#777
            color:white;
        }   
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder:'搜索',

})`
    transition:all 0.2s ease-out;
    width:160px;
    height:38px;
    border:none;
    outline:none;
    border-radius:19px;
    margin-top:9px;
    margin-left:20px;
    padding: 0 35px 0 20px;
    box-sizing:border-size;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
`;
export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:60px;
    width:240px;
    padding: 0 20px;
    background:white;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    &.hidden{
        display:none;
    }
`;
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInfoSwitch = styled.span`
    float:right;
    font-size:13px; 
    cursor:pointer;
    .spin{
        display:inline-block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition: all .3s ease-in;  
    }
`;
export const SearchInfoList = styled.div`
    overflow:hidden;
`;
export const SearchInfoItem = styled.a`
    display:inline-block;
    float:left;
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    margin-right:10px;
    margin-bottom:15px;
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    font-size:14px;
    &.reg{
        color:#ec6149;
    }
    &.writing{
        background:#ec6149;
        color:#fff;
        cursor:pointer;
    }
`;
