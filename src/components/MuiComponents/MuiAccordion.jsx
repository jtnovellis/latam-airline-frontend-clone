import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const MuiAccordion = props => {
  const { idItem, children, title, classname, expanded, setExpanded } = props;
  return (
    <div className={classname}>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(prev => !prev)}>
        <AccordionSummary
          id={`panel${idItem}-header`}
          aria-controls='panel1-content'
          expandIcon={<ExpandMoreIcon sx={{ color: 'rgb(232, 17, 75)' }} />}>
          <Typography sx={{ fontFamily: 'LATAM Sans' }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};
