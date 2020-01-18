import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Modal from '../../library/modal/Modal';
import './App.css';

class App extends Component {
    render() {
        const {appState: {modal: { isOpen,children }} } = this.props;
        return (
            <div>
                {isOpen?<Modal children={children}/>:null}
                <div>
                    <ul>
                        <li><Link to="/">BearList</Link></li>
                        <li><Link to="/beardet">Bear Details</Link></li>
                        <li><Link to="/favlist">Favorite List</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);