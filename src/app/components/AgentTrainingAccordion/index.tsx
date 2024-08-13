import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import BodyText from "../typeface/BodyText";
import { Box } from "@mui/material";
import { PanelData } from "../home/AgentTraining";




interface AgentTrainingAccordionProps {
  data: PanelData[];
  handleChange: (
    panel: PanelData,
  ) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: string | false;
}

export default function AgentTrainingAccordion({
  data,
  handleChange,
  expanded,
}: AgentTrainingAccordionProps) {
  return (
    <>
      {data.map((item, i) => (
       <Box key={i}>
         <Accordion

        key={i}
          sx={{
            bgcolor: expanded === `panel${i}` ? "white" : "transparent",
            border: expanded === `panel${i}` ? `1px solid #293A5E` : "0px",
            boxShadow: "none",
            borderRadius: "8px !important",
            mb: 2,
            pb: 4,
            borderBottom: expanded === `panel${i}` ? '0.5px solid #293A5E' : '0.5px solid lightgray',
            '&:not(:last-child)': {
              borderBottom: 0,
            },
            ":before": {
                display: 'none',
            },
          }}
          expanded={expanded === `panel${i}`}
          onChange={handleChange(item)}
        >
          <AccordionSummary
            aria-controls={`panel${i}-content`}
            id={`panel${i}-header`}
          >
            <BodyText variant="large" sx={{ width: "33%", flexShrink: 0 }}>
              {item.title}
            </BodyText>
          </AccordionSummary>
          <AccordionDetails>
            <BodyText variant="medium"> 
              {item.description}
            </BodyText>
          </AccordionDetails>
        </Accordion>
        {/* {i !== 4 && <Divider />} */}
       </Box>
      ))}

    
    </>
  );
}
