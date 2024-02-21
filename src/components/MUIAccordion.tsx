import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from "react";

const MUIAccordion = () =>{

    const [expanded, setExpand] =useState<string | boolean>(false);
    const handleAccordion = (isExapnd: boolean, panel: string) =>{
        setExpand(isExapnd ? panel : false)
    }
    return(
        <Box m="50px">
            <Accordion expanded={expanded === 'pan1'} onChange={(_, isExpand)=> handleAccordion(isExpand, "pan1")}>
                <AccordionSummary
                    id="pan-header-1"
                    aria-controls="pan-content-1"
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>Accordion One</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero ut tempore fuga rerum corrupti quod, dolore neque id saepe quae, facere dolor omnis veniam quaerat velit consequuntur est aut!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'pan2'} onChange={(_, isExpand)=> handleAccordion(isExpand, "pan2")}>
                <AccordionSummary
                    id="pan-header-2"
                    aria-controls="pan-content-2"
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>Accordion Two</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero ut tempore fuga rerum corrupti quod, dolore neque id saepe quae, facere dolor omnis veniam quaerat velit consequuntur est aut!</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'pan3'} onChange={(_, isExpand)=> handleAccordion(isExpand, "pan3")}>
                <AccordionSummary
                    id="pan-header-3"
                    aria-controls="pan-content-3"
                    expandIcon={<ExpandMoreIcon/>}
                >
                    <Typography>Accordion Three</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero ut tempore fuga rerum corrupti quod, dolore neque id saepe quae, facere dolor omnis veniam quaerat velit consequuntur est aut!</Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default MUIAccordion;