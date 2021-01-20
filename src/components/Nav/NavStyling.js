// create custom themes of components
import {
  createMuiTheme,
} from '@material-ui/core/styles';

const NavStyling = createMuiTheme({
  // overides for components
  overrides: {
      // customizing all accordians
      MuiPaper: {
        root: {
          width: '100%',
          backgroundColor: 'none',
        },
      },
      MuiAccordion: {
        root: {
          backgroundColor: 'none',
          '&$expanded': {
            margin: 0,
          },
        },
      },
      // customizing all accordian summaries
      MuiAccordionSummary: {
        root: {
          height: '64px',
          margin: '0 -10px',
          padding: '0 10px',
        },
        content: {
          justifyContent: 'space-between',
        },
      },
      MuiAccordionDetails: {
        root: {
          margin: '0 -10px',
          padding: '0 10px',
          display: '',
        },
      },
      MuiDivider: {
        root: {
          width: '100%',
          height: '64px',
          position: 'absolute',
          top: 0,
          left: 0,
          margin: 0,
          opacity: 0,
        },
      },
      MuiCollapse: {
        container: {
          margin: '0 -10px',
          padding: '0 10px',
        },
      },
    MuiButtonBase: {
      root: {
        backgroundColor: 'none',
      },
    },
  },
});

export default NavStyling;