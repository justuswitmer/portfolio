import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import mapStoreToProps from '../../redux/mapStoreToProps';

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
    <div>
      Page coming soon!
    </div>
  );
}

export default connect(mapStoreToProps)(withRouter(Toolkit));