import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';

const changeList = (data)=>({
    type: actionTypes.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10),
 });

export const  searchFocus = ()=>({
    type:actionTypes.SEARCH_FOCUS,
});
export const  searchBlur = ()=>({
    type:actionTypes.SEARCH_BLUR,
});

export const getList = ()=>{
    return(dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            dispatch(changeList(res.data.data));
        }).catch(()=>{
            console.log('Error!')
        })
    }
};
export const  MouseEnter = ()=>({
    type:actionTypes.MOUSE_ENTER,
});
export const  MouseLeave = ()=>({
    type:actionTypes.MOUSE_LEAVE,
});
export const  ChangePage = (page)=>({
    type:actionTypes.CHANGE_PAGE,
    page,
});