import React, { useState } from 'react'
import { Accordion } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Switch from '@mui/material/Switch';
import MyDiv from './MyDiv';
function MyComponent() {

  const [size, setLarge] = useState("100px");

  function handleChange(){
    if(size == '100px'){
      setLarge('400px');
    }
    else{
      setLarge('100px');
    }
  }

 
  return (
    <div>
        
        <Accordion TransitionProps = {{timeout: 1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <hr></hr>

      <Accordion TransitionProps = {{timeout: 1000}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Switch
          
          onChange={handleChange}
        />
        </AccordionDetails>
      </Accordion>
      <hr></hr>
      <MyDiv highet= {size}></MyDiv>

    </div>
  )
}

export default MyComponent