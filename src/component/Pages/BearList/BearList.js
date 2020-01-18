import React,{Component} from 'react';
import styles from './BearList.css';
import {connect} from 'react-redux';
import {fetchBearList,setFavoriteFlag,unsetFavoriteFlag,setModaldata} from '../../../data/actions/actions';
import Paper from '../../../library/paper/paper';
import IconButton from '../../../library/iconButton/IconButton';

class BearList extends Component{
    componentDidMount(){
        this.props.appState.bearList.length==0 && this.props.fetchBearList();
    }
    onClickHandler(id,flag){
        !flag ? this.props.setFavoriteFlag(id):this.props.unsetFavoriteFlag(id);
    }
    modalhandler(bearItem){
        //console.log('modal handler called',bearItem);
        let content = this.getModalContent();
        this.props.setModaldata(true,content);
    }
    getModalContent(){
        console.log('modal content function creator');
        return(
            <div>
                this is the content of modal set as state
            </div>
        )
    }
    render(){
        let {appState:{bearList},filter} = this.props;
        let dispList = bearList.filter((bear) => {
            return !filter || bear.favFlag;
        });
        return(
            <div>
                {dispList && dispList.map((bearItem,key)=>{
                    const iconStyle = bearItem.favFlag?'solidHeart':'regularHeart';
                    return(
                        <div key={bearItem.id}>
                            <Paper src={bearItem.image_url} >
                                <div>
                                    <div>{bearItem.name}</div>
                                    <div><IconButton iconType={iconStyle} clickHander={() => this.onClickHandler(bearItem.id,bearItem.favFlag)} /></div>
                                    <div><IconButton iconType='plus' clickHander={() => this.modalhandler(bearItem)} /></div>
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