// Libraries
import React from 'react';

// Components
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

// Utils
import { useStylesCard, useStyleButton } from '../../hooks/useStyle';
import { cartConstants, actionTypes } from '../../utils/constants';
import { EnumProduct, ProductBox } from '../../interfaces/main';
import { useDispatch } from 'react-redux';

const ProdutBox = ({ product }: ProductBox): React.ReactElement => {
  // initiating style classes
  const cardClasses = useStylesCard();
  const buttonClasses = useStyleButton();
  const dispatch = useDispatch();

  /**
   * Event handler that gets the chosen product and update it in the store
   * @function
   * @param {product}
   */
  const onClickHandler = (product: EnumProduct): void => {
    dispatch({ type: actionTypes.addToCartACtion, payload: product });
  };

  return (
    <Card className={cardClasses.root}>
      <CardContent>
        <Typography className={cardClasses.pos} color="textSecondary">
          {product.name}
        </Typography>
        <Typography variant="body2" component="p">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          className={buttonClasses.fullWidth}
          onClick={() => onClickHandler(product)}
          size="small"
        >
          {cartConstants.addToCart}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProdutBox;
