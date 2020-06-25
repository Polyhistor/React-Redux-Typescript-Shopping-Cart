// Libraries
import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import ProductsTable from '../products/ProductsTable';
import LinkButton from '../buttons/LinkButton';

// Utils
import { useStylesGrid } from '../../hooks/useStyle';
import { cartConstants } from '../../utils/constants';

const Cart = (): React.ReactElement => {
  // initiating style classes
  const gridClasses = useStylesGrid();

  return (
    <Grid className={gridClasses.root} container spacing={4} component="main">
      <Grid
        className={gridClasses.root}
        container
        spacing={4}
        component="section"
      >
        <LinkButton to="/" label={cartConstants.backtoShop}></LinkButton>
      </Grid>
      <ProductsTable></ProductsTable>
    </Grid>
  );
};

export default Cart;
