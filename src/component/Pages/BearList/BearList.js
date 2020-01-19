import React,{Component} from 'react';
import styles from './BearList.css';
import {connect} from 'react-redux';
import {fetchBearList,setFavoriteFlag,unsetFavoriteFlag,setModaldata} from '../../../data/actions/actions';
import Paper from '../../../library/paper/paper';
import IconButton from '../../../library/iconButton/IconButton';
import BearDetails from '../BearDetails/BearDetails';
import './BearList.css';

class BearList extends Component{
    componentDidMount(){
        this.props.appState.bearList.length==0 && this.props.fetchBearList();
    }
    onClickHandler(id,flag){
        !flag ? this.props.setFavoriteFlag(id):this.props.unsetFavoriteFlag(id);
    }
    modalhandler(bearItem){
        let content = this.getModalContent(bearItem);
        this.props.setModaldata(true,content);
    }
    getModalContent(bearItem){
        return(
            <div>
                <BearDetails item={bearItem} />
            </div>
        )
    }
    render(){
        let {appState:{bearList},filter} = this.props;
        let dispList = bearList.filter((bear) => {
            return !filter || bear.favFlag;
        });
        return(
            <div className="bear-list-container">
                {dispList && dispList.map((bearItem,key)=>{
                    const iconStyle = bearItem.favFlag?'solidHeart':'regularHeart';
                    return(
                        <div className="catalogue-wrapper" key={bearItem.id}>
                            <Paper src={bearItem.image_url} >
                                <div>
                                    <div className="item-tag">{bearItem.name}</div>
                                    <div className="icon-container">
                                        <div className="icon-btn"><IconButton iconType={iconStyle} size='2x' clsName="btn-icons" color='#ff0066' clickHander={() => this.onClickHandler(bearItem.id,bearItem.favFlag)} /></div>
                                        <div className="icon-btn"><IconButton iconType='plus' size='2x' clsName="btn-icons" color='#0047b3' clickHander={() => this.modalhandler(bearItem)} /></div>
                                    </div>
                                </div>
                            </Paper>
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBearList : () => dispatch(fetchBearList()),
        setFavoriteFlag : (id) => dispatch(setFavoriteFlag(id)),
        unsetFavoriteFlag : (id) => dispatch(unsetFavoriteFlag(id)),
        setModaldata: (status,content) => dispatch(setModaldata(status,content))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BearList);