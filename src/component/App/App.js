import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from '../../library/modal/Modal';
import './App.css';
import { setModaldata } from '../../data/actions/actions';
import NavBar from '../NavBar/NavBar';

class App extends Component {
    render() {
        const {appState: {modal: { isOpen,children }} } = this.props;
        return (
            <div>
                {isOpen?<Modal onClickHandler={this.props.setModaldata} children={children}/>:null}
                <NavBar />
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => {
    return {
        setModaldata:(status,content) => dispatch(setModaldata(status,content)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);