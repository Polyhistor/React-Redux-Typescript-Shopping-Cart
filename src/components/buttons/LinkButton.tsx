// Libraries
import React from 'react';

// Components
import Button from '@material-ui/core/Button';
import { Link, LinkProps } from 'react-router-dom';

// Utils
import { LinkBUtton } from '../../interfaces/main';

const LinkButton = ({ to, label }: LinkBUtton): React.ReactElement => {
  // verifying that the wrapped component has static property set
  const LinkBehavior = React.forwardRef<any, Omit<LinkProps, 'to'>>(
    (props, ref) => <Link ref={ref} to={`${to}`} {...props} />
  );

  return (
    <Button variant="contained" color="primary" component={LinkBehavior}>
      {label}
    </Button>
  );
};

export default LinkButton;
