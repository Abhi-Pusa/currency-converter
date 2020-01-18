import React from 'react';
import Styles from './paper.css';

export default (props) => {
    let {src,children} = props;
    return(
        <div>
            <div>
                <img className="paper-image" src={src} />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

// class Paper extends Component{
//     render(){
//         let {src,children} = this.props;
//         return(
//             <div>
//                 <div>
//                     <image src={src} />
//                 </div>
//                 <div>
//                     {children}
//                 </div>
//             </div>
//         )
//     }
// }

// export default Paper;