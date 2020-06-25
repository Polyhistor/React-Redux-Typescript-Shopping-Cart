// Libraries
import React, { useEffect } from 'react';
import * as Redux from 'redux';

// Components
import Avatar from '@material-ui/core/Avatar';

// Utils
import { connect } from 'react-redux';
import { fetchPhotoAction } from '../../actions/cart';
import { PhotoConnected, CartProps } from '../../interfaces/main';

// Attention: this component does not serve any logical purpose, it has been merely created to showcase Redux Thunk
export const _Photo = ({
  thumbnailUrl,
  fetchPhotoAction,
}: PhotoConnected): React.ReactElement => {
  // making aysn call on component mount and updating the state
  useEffect(() => {
    fetchPhotoAction();
  }, [fetchPhotoAction]);

  return <Avatar alt="thumbnail placeholder" src={`${thumbnailUrl}`} />;
};

const mapStateToProps = ({ cart }: CartProps): Object => {
  return cart.photo;
};

const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): Object => ({
  fetchPhotoAction: () => dispatch(fetchPhotoAction()),
});

export const Photo: PhotoConnected | any = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Photo);
