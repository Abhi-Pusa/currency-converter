import React,{Component} from 'react';
import styles from './BearDetails.css';

class BearDetails extends Component{
    render(){
        const {counter,message} = this.props;
        return(
            <div>
                <p>Selected bear details will get displayed</p>
                <p>{counter}</p>
                <p>{message}</p>
            </div>
        )
    }
}

export default BearDetails;