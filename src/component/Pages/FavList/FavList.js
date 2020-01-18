import React,{Component} from 'react';
import styles from './FavList.css';
import BearList from '../BearList/BearList';

class FavList extends Component{
    render(){
        return(
            <div>
                <div>this is favlist</div>
                <BearList filter={true} />
            </div>
        )
    }
}

export default FavList;