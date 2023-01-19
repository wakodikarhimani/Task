import * as React from 'react';
import { useContext } from 'react';
import {UserContext} from './ComponentA';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';

//Unrelated component to show Employment Details
const EmpDetails=()=>{
    const data=useContext(UserContext);
    let empDetail=data.ele.employment;
    return(
        <React.Fragment>
            <Accordion sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <Typography>Employment Details(Designation)</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {empDetail.title}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Divider sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', padding:'10px 10px',marginLeft:'0px'}} variant="inset" />
        </React.Fragment>
    )
}

export default EmpDetails;