import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';


export const WindowAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: "none",
  border: "3px solid #2661ca",
  borderRadius: "10px !important",
  width: "400px",
  opacity: "0.7",
  transition: "width 0.2s, opacity 0.2s",
  '& .MuiAccordion-heading': {
    '& .MuiAccordionSummary-root': {
      position: "relative",
      padding: 0,
      minHeight: "unset",
      '&.Mui-expanded': {
        minHeight: "unset",
      },
      '& .MuiAccordionSummary-content': {
        margin: "0",
        display: "block",
        '& .summary-text': {
          padding: "20px 10px"
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
    padding: "0 10px 20px 10px"
  },

  '&.Mui-expanded': {
    width: "100%",
    opacity: "1",
  },

  '&:hover': {
    backgroundColor: "rgba(255, 255, 255, 0.753)",
    boxShadow: "0 10px 10px #ffe1f286",
    opacity: "1",
  },
}));

export const WindowHeader = ({url}) => {
    return (<div className="window-head">
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