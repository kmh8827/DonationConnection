import React, { useState } from 'react';
import { Card, CardTitle } from 'reactstrap';
// import { Collapse } from 'react-collapse';
import ReserveButton from '../components/reserveButton';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function ReserveCard(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // const [state, setState] = useState({ isOpened: false, availability: props.availability })

  // const { isOpened } = state;

  // const closeOtherCard = () => {
  //   if (Collapse.id === !isOpened) {
  //     setState({ isOpened: isOpened })
  //   }
  // }
  // console.log(props.id, "key")
  // const height = 100;

  return (

    <Accordion expanded={expanded === props.id} onChange={handleChange(props.id)}>
      <AccordionSummary
        expandIcon={'^'}
        aria-controls={props.id}
        id={props.id}
      >
        <Typography className={classes.heading}>General settings</Typography>
        <Typography className={classes.secondaryHeading}>I am an accordion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
          maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default ReserveCard;