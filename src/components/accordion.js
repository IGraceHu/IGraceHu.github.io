import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';


export const WindowAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  border: "3px solid #2661ca",
  borderRadius: "10px !important",
  // width: "500px",
  // maxWidth: "100%",
  opacity: "0.7",
  transition: "0.4s",
  color: "unset",
  '& .MuiAccordion-heading': {
    '& .MuiAccordionSummary-root': {
      position: "relative",
      padding: 0,
      minHeight: "unset",
      transition: "width 0.2s, opacity 0.2s",
      '&.Mui-expanded': {
        minHeight: "unset",
      },
      '& .MuiAccordionSummary-content': {
        margin: "0",
        display: "block",
        '& .summary-text': {
          padding: "10px 20px",
          margin:0,
        },
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        margin: "0",
      },

      '& .MuiAccordionSummary-content .summary-text::after': {
        content: '"..."',
      },
      '& .MuiAccordionSummary-content.Mui-expanded .summary-text::after': {
        content: '""',
      },
      
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: "0 20px 20px"
  },

  '&.Mui-expanded': {
    opacity: "1",
    marginLeft: "0px",
    marginRight: "0px",
    '&  .MuiAccordionSummary-root:hover': {
      opacity: "0.7",
    },
  },

  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.753)",
    boxShadow: "0 10px 10px #ffe1f286",
    opacity: "1",
  },
}));

export const WindowHeader = ({url, style}) => {
    return (<div className="window-head" style={style}>
                <div className="window-buttons">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                { url && <div className="window-head-url">{url}</div> }
            </div>)
}


export const FunctionAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  marginLeft: "1rem !important",
  color: "unset",
  '& .MuiAccordion-heading': {
    '& .MuiAccordionSummary-root': {
      position: "relative",
      padding: 0,
      minHeight: "unset",
      alignItems: "start",
      '&.Mui-expanded': {
        minHeight: "unset",
      },
      '& .MuiAccordionSummary-content': {
        backgroundColor: "#539AEA33",
        margin: "0",
        '&:hover': {
            color: "#539AEA",
        },
        '& > .summary-text::after': {
            content: '" {···"',
            color: "#539AEA",
            marginLeft: "1ch",
            display: "inline",
        },
      },
      '& .MuiAccordionSummary-content.Mui-expanded': {
        backgroundColor: "#539aea00",
        margin: "0",
        '& > .summary-text::after': {
            content: '" {"',
        },
      },

      '& .MuiAccordionSummary-expandIconWrapper': {
        position: "absolute",
        // marginTop: "12px",
        left: "-1.5rem",
        '&.Mui-expanded': {
          transform: "rotate(90deg)"
        }
      },
      
    },
  },
  '& .MuiAccordionDetails-root': {
    padding: "16px",
    borderLeft: "2px solid #ffe1f2",
  },
  '&::after': {
    content: '"}"',
    color: "#539AEA",
    fontSize: "1rem",
  }
}));