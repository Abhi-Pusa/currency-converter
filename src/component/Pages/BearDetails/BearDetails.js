import React,{Component} from 'react';
import styles from './BearDetails.css';
import ClConfig from '../../../constant/clContentMap';

class BearDetails extends Component{
    getFieldList(prop,value){
            return(
                <div className="info-block" key={Math.random()}>
                    <div className="info-label">{ClConfig[prop]}</div>
                    <div className="info-value">{value}</div>
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
                <div className="bear-details-head">Bear Information</div>
                <div className="bear-details-content">
                    <div className="bear-img-wrapper">
                        <img className="bear-details-img" src={item.image_url} alt="bear image"/>
                    </div>
                    <div className="bear-content-wrapper">
                        {content}
                    </div>
                </div>
            </div>
        )
    }
}

export default BearDetails;