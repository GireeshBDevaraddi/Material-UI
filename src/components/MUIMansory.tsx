import { Masonry } from "@mui/lab";
import { Accordion, AccordionDetails, AccordionSummary, Box, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90]
const MUIMansory = () => {
    return (
        <Box>
            <Box
                sx={{
                    width: 500,
                    minHeight: 400
                }}
            >
                <Masonry columns={4} spacing={1}>
                    {heights.map((height, index) => (
                        <Paper key={index} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height,
                            border: '1px solid'
                        }}>
                            {index + 1}
                        </Paper>
                    ))}
                </Masonry>
            </Box>
            <Box
                sx={{
                    width: 500,
                    minHeight: 400
                }}
            >
                <Masonry columns={4} spacing={1}>
                    {heights.map((height, index) => (
                        <Paper key={index} sx={{
                            
                            border: '1px solid'
                        }}>
                            <Accordion sx={{minHeight: height}} >
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography>Accordion {index +1 }</Typography>
                                </AccordionSummary>
                                <AccordionDetails>Content</AccordionDetails>
                            </Accordion>
                        </Paper>
                    ))}
                </Masonry>
            </Box>
        </Box>
    )
}

export default MUIMansory;

