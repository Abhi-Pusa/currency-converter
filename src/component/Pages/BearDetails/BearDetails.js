import React,{Component} from 'react';
import styles from './BearDetails.css';
import ClConfig from '../../../constant/clContentMap';

class BearDetails extends Component{
    getFieldList(prop,value){
            return(
                <div key={Math.random()}>
                    <div>{ClConfig[prop]}</div>
                    <div>{value}</div>
                </div>
            )
    }

    render(){
        const {item} = this.props;
        const content = [];
        for(let prop in item){
            ClConfig[prop] && content.push(this.getFieldList(prop,item[prop]));
        }
        return(
            <div className="bear-details-container">
                <div className="bear-details-head">bear details</div>
                <div className="bear-details-content">
                    <div style={{flex:1}}>
                        <img className="bear-details-img" src={item.image_url} alt="bear image"/>
                    </div>
                    <div styles={{flex:3}}>
                        {content}
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default BearDetails;