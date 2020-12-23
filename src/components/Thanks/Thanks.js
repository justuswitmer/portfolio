import mapStoreToProps from "../../redux/mapStoreToProps";
import { withRouter } from "react-router-dom";
import { useSpring, animated } from "react-spring";
function Thanks(props) {
  const trans = useSpring({ opacity: 1, from: { opacity: 0 } });
  return (
    <animated.div style={trans}>
      <p>Thanks for your message! I will respond to you as soon as possible</p>
      <button onClick={()=>props.history.push('/project')}>View my Work</button>
    </animated.div>
  );
}

export default withRouter(Thanks);