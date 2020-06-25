// Libraries
import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import Navigation from '../navigation/Navigation';
import ProductSection from '../products/ProductsListing';

// Utils
import { useStylesGrid } from '../../hooks/useStyle';
import { ProductListing } from '../../interfaces/main';

const Shop = ({ productsData }: ProductListing): React.ReactElement => {
  // initiating style classes
  const gridClasses = useStylesGrid();

  return (
    <Grid className={gridClasses.root} container spacing={4} component="main">
      <Navigation></Navigation>
      <ProductSection productsData={productsData}></ProductSection>
    </Grid>
  );
};

export default Shop;
