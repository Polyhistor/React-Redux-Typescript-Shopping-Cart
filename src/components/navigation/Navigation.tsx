// Libraries
import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LinkButton from '../buttons/LinkButton';
import { Photo } from '../photo/Photo';

// Utils
import {
  useStylesGrid,
  useStyleTypography,
  useStyleButton,
} from '../../hooks/useStyle';
import { generalConstants, cartConstants } from '../../utils/constants';

const Navigation = (): React.ReactElement => {
  // initiating style classes
  const gridClasses = useStylesGrid();
  const typoGraphyClasses = useStyleTypography();
  const buttonClasses = useStyleButton();

  return (
    <Grid
      container
      spacing={3}
      className={gridClasses.root}
      component="section"
    >
      <Grid item xs={9} className={gridClasses.split}>
        <Photo></Photo>
        <Typography
          className={typoGraphyClasses.root}
          variant="h1"
          component="h1"
        >
          {generalConstants.shopTitle}
        </Typography>
      </Grid>
      <Grid item xs={3} className={buttonClasses.root}>
        <LinkButton to="/cart" label={cartConstants.goToChart}></LinkButton>
      </Grid>
    </Grid>
  );
};

export default Navigation;
