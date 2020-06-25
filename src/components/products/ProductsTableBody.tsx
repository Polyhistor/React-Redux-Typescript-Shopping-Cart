// Libraries
import React from 'react';

// Components
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

// Utils
import { EnumProduct } from '../../interfaces/main';
import { useDispatch } from 'react-redux';
import { actionTypes, generalConstants } from '../../utils/constants';

const ProductsTableBody = ({ tableData }) => {
  const dispatch = useDispatch();

  /**
   *  Mapped dispatch that dispatches for delete from cart action
   * @function
   * @returns {Function}
   */
  const onDeleteHandler = (data: EnumProduct): void => {
    dispatch({ type: actionTypes.deleteFromCartAction, payload: data });
  };

  return (
    <TableBody>
      {tableData.addedItems &&
        tableData.addedItems.map((data: EnumProduct, i: number) => (
          <TableRow key={i}>
            <TableCell align="left" scope="row">
              {data.name}
            </TableCell>
            <TableCell align="left">{data.price}</TableCell>
            <TableCell align="left">{data.quantity}</TableCell>
            <TableCell align="right">
              <Button onClick={() => onDeleteHandler(data)}>
                <DeleteIcon />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      <TableRow>
        <TableCell align="right" colSpan={3}>
          {generalConstants.totalLabel}
        </TableCell>
        <TableCell align="left" colSpan={1}>
          {tableData.total}
        </TableCell>
      </TableRow>
    </TableBody>
  );
};

export default ProductsTableBody;
