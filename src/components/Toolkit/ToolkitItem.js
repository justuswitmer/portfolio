import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mapStoreToProps from '../../redux/mapStoreToProps';

function ToolkitItem(props) {

  return(
    <div className='tki-div'>
      <h2 className='tki-name'>{props.toolkit.name}</h2>
      {props.toolkit.items.map( item =>
        <p>{item}</p>
      )}
      <h3 className='tki-learning'>Learning</h3>
      {props.toolkit.learning.map( learning =>
        <p>{learning}</p>  
      )}
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(ToolkitItem));