import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function CandidateCard({ name, voteCount, percentage }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>{name}</Title>
      <Typography component="p" variant="h4">
        {voteCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {Math.round(percentage * 100) / 100} %
      </Typography>
    </React.Fragment>
  );
}
