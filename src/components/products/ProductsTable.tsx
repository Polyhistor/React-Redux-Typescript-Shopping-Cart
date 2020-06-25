// Libraries
import React from 'react';

// Components
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProductsTableHeader from './ProductsTableHeader';
import ProductsTableBody from './ProductsTableBody';
import Typography from '@material-ui/core/Typography';

// Utils
import {
  useStylesGrid,
  useStyleTypography,
  useStylesTable,
} from '../../hooks/useStyle';
import { useSelector } from 'react-redux';
import { generalConstants } from '../../utils/constants';
import { Cart } from '../../interfaces/main';

const ProductsTable: React.FC = (): React.ReactElement => {
  // initiating style classes
  const tableClasses = useStylesTable();
  const gridClasses = useStylesGrid();
  const typoGraphyClasses = useStyleTypography();

  /**
   * @todo create a module for different states of the store
   */
  const state: Cart | any = useSelector((state) => state);

  return (
    <Grid
      className={gridClasses.root}
      container
      spacing={4}
      component="section"
    >
      {state.cart.addedItems.length ? (
        <TableContainer component={Paper}>
          <Table
            className={tableClasses.root}
            size="small"
            aria-label="shopping cart"
          >
            <ProductsTableHeader></ProductsTableHeader>
            <ProductsTableBody tableData={state.cart}></ProductsTableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography className={typoGraphyClasses.alt} component="p">
          {generalConstants.emptyCart}
        </Typography>
      )}
    </Grid>
  );
};

export default ProductsTable;
