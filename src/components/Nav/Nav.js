import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import NavMobileMenu from './NavMobileMenu';
import NavTheme from './NavTheme';
import NavItem from './NavItem';

function debounce(fn, ms) {
  let timer;
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms);
  };
}

function Nav(props) {
  const dispatch = useDispatch();
  const openingTag = '<nav>';
  const closingTag = '</nav>';

  // followed this tutorial on how to resize javascript: 
  // https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  // on load dispatches theme specs
  // runs function that calls an event listener that listens for a window resize
  // also calls debounce which only rerenders every 0.5 seconds
  useEffect(() => {
    dispatch({
      type: 'SET_THEME',
      payload: true
    });
    dispatch({
      type: 'UPDATE_DIMENSIONS',
      payload: window.innerWidth
    });
    const debouncedhandleResize = debounce(function handleResize(){
      dispatch({
        type: 'UPDATE_DIMENSIONS',
        payload: window.innerWidth
      });
    }, 500)

    window.addEventListener('resize', debouncedhandleResize);
    return _ => {
      window.removeEventListener('resize', debouncedhandleResize);
    }
  }, [dispatch]);

    return (
      <div className='nav-container'>
        <span className='nav-opening-tag'>{openingTag}</span>
        {props.store.dimensions <= 688 ? 
          <NavMobileMenu/>
        :
          <>
            <div
            className='nav-logo'
            tabIndex='0'
            onClick={()=>props.history.push('/')}
            >
              <svg 
                width={props.store.dimensions <= 688 ? "50px" : props.store.dimensions <= 992 ? "60px" : "80px"} 
                height={props.store.dimensions <= 688 ? "50px" : props.store.dimensions <= 992 ? "60px" : "80px"} 
                viewBox="0 0 60 60">
                <g id="Site-Pages-" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Landing-Page---DM" transform="translate(-2730.000000, -105.000000)">
                        <g id="Annotations" transform="translate(1444.000000, 0.000000)">
                            <g id="Logo" transform="translate(82.000000, 76.000000)">
                                <g id="Logo---Black" transform="translate(1204.000000, 29.000000)">
                                    <rect id="Container" x="0" y="0" width="60" height="60"></rect>
                                    <g 
                                      id="Logo"
                                      transform="translate(1.047363, 19.962891)" 
                                      fill={props.store.setTheme === true ? "#F0F0F0" : "#111111"}
                                      fillRule="nonzero">
                                        <path d="M9.66654576,24.3500977 C13.7007254,22.359375 16.0078544,20.3422852 16.0078544,15.8071289 L16.0078544,2.12255859 C16.0078544,0.962402344 16.2715262,0.685546875 17.8799247,0.448242188 L17.8799247,0 L11.2881278,0 L11.2881278,0.448242188 C12.9097098,0.685546875 13.1601981,0.962402344 13.1601981,2.12255859 L13.1601981,15.4511719 C13.1601981,19.9204102 12.2373465,22.1088867 9.44242467,23.9545898 L9.66654576,24.3500977 Z M28.003418,19.0371094 L33.0395508,3.11132812 L37.9174805,19.0371094 L39.2753906,19.0371094 L44.2456055,3.77050781 C45.1025391,1.14697266 45.5507812,0.659179688 46.9482422,0.448242188 L46.9482422,0 L41.9516602,0 L41.9516602,0.448242188 C43.8632812,0.711914062 43.9951172,1.29199219 43.2832031,3.70458984 L39.7104492,15.9125977 L35.9794922,3.1640625 C35.3598633,1.0546875 35.5048828,0.672363281 37.152832,0.448242188 L37.152832,0 L30.6401367,0 L30.6401367,0.448242188 C32.4462891,0.73828125 32.6835937,1.10742188 32.0244141,3.375 L28.4121094,15.8862305 L24.5361328,3.13769531 C23.9692383,1.23925781 24.1801758,0.659179688 25.9072266,0.448242188 L25.9072266,0 L19.0385742,0 L19.0385742,0.448242188 C20.277832,0.619628906 20.8447266,1.01513672 21.5302734,3.13769531 L26.6455078,19.0371094 L28.003418,19.0371094 Z" id="JW"></path>
                                        <polygon id="&lt;" points="6.10107422 14.8081055 6.10107422 13.6582031 1.07666016 10.809082 1.07666016 10.7431641 6.10107422 7.70361328 6.10107422 6.55371094 0 10.3549805 0 11.2851562"></polygon>
                                        <polygon id="&gt;" points="51.7933175 14.8081055 57.8943917 11.2851562 57.8943917 10.3549805 51.7933175 6.55371094 51.7933175 7.70361328 56.8250558 10.7431641 56.8250558 10.809082 51.7933175 13.6582031"></polygon>
                                        <polygon id="/" points="47.4257812 16.7783203 51.0219727 4.01220703 50.0332031 4.01220703 46.4370117 16.7783203"></polygon>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
              </svg>
            </div>
            <div className='nav-theme-note'>Light Theme is currently under construction</div>
            <div className='nav-routes'>
              {props.store.routes.map(route =>
                <NavItem
                  key={route.name}
                  route={route}
                />
              )}
            </div>
            <NavTheme/>
          </>
        }
        <span className='nav-closing-tag'>{closingTag}</span>
      </div>
    );
}

export default connect(mapStoreToProps)(withRouter(Nav));