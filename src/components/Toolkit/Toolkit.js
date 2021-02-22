import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import mapStoreToProps from '../../redux/mapStoreToProps';
import ToolkitItem from './ToolkitItem';

function Toolkit(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'UPDATE_HAS_BRACKETS',
      payload: props.history.location.pathname,
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, [dispatch, props.history.location.pathname]);

  return(
    <div className='toolkit-container'>
      <h1>Here are the tools I use</h1>
        <div>
        {props.store.toolkit.map( tool => 
          <ToolkitItem
            toolkit={tool}
          />  
        )}
      </div>
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Toolkit));