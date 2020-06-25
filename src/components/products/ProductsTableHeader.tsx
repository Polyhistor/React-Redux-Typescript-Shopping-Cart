// Libraries
import React from 'react';

// Components
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// Utils
import { tableHeaderConstants } from '../../utils/constants';

const ProductsTableHeader = (): React.ReactElement => {
  return (
    <TableHead>
      <TableRow>
        {Object.values(tableHeaderConstants).map((header, i) => (
          <TableCell key={i}>{header}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ProductsTableHeader;
