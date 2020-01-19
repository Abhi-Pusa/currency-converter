import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component{
    constructor(){
        super();
        this.state = {
            active:1
        }
    }
    onClickHandler(num){
        this.setState({active:num});
    }
    render(){
        return(
            <div>
                <ul>
                    <li onClick={()=>this.onClickHandler(1)} className={this.state.active == 1?'active':''}><Link to="/">BearList</Link></li>
                    <li onClick={()=>this.onClickHandler(2)} className={this.state.active == 2?'active':''}><Link to="/favlist">Favorite List</Link></li>
                </ul>
            </div>
        )
    }
}

export default NavBar;