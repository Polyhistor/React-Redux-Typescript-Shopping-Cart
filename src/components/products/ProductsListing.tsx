// Libraries
import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import ProductBox from './ProductBox';

// Utils
import { useStylesGrid } from '../../hooks/useStyle';
import { EnumProduct, ProductListing } from '../../interfaces/main';

const ProductSection = ({
  productsData,
}: ProductListing): React.ReactElement => {
  // initiating style classes
  const gridClasses = useStylesGrid();

  return (
    <Grid
      className={gridClasses.root}
      container
      spacing={4}
      component="section"
    >
      {productsData.map((product: EnumProduct, i: number) => (
        <ProductBox key={i} product={product}></ProductBox>
      ))}
    </Grid>
  );
};

export default ProductSection;
