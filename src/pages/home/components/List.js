import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
    ListItem,
    ListInfo,
    LoadMore,
} from '../styled'
import {actionCreators} from '../store/index';
import {Link} from 'react-router-dom';
class List extends Component {
    render() {
        return (
            <Fragment>
                {
                   this.props.list.map((item,index)=>{
                    return( 
                    <Link key={index} to={'/detail/'+ item.get('id')}>
                    <ListItem key = {index}>
                        <img
                            className='pic'
                            src = {item.get('imgUrl')}
                            alt="test"
                        />
                        <ListInfo>
                            <h3 className='title'>
                                {item.get('title')}
            </h3>
                            <p className='desc'>
                                {item.get('desc')}
            </p>
                        </ListInfo>
                    </ListItem>
                    </Link>
                    );
                })
            }
            <LoadMore onClick={()=>this.props.getMoreList(this.props.page)}>更多内容</LoadMore>
            </Fragment>

        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'articleList']),
    page:state.getIn(['home','articlePage']),
})
const mapDispatch = (dispatch)=>({
    getMoreList(){
        dispatch(actionCreators.getMoreList());
    }
})
export default connect(mapState,mapDispatch)(List);