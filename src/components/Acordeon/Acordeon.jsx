  // import * as React from 'react';
  import Accordion from '@mui/material/Accordion';
  import AccordionSummary from '@mui/material/AccordionSummary';
  import AccordionDetails from '@mui/material/AccordionDetails';
  import Typography from '@mui/material/Typography';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
  import { Link } from "react-router-dom";

  const Acordeon = () => {
    return (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Categorias</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Link className="li" to="/category/men's clothing"><li>Ropa de hombre</li></Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  }
  
export default Acordeon