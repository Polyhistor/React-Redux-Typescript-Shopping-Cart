// Libraries
import React from 'react';

// Components
import Shop from './Shop';

// Utils
import data from '../../data/data.json';

const ShopContainer: React.FC = (): React.ReactElement => {
  return (
    <div>
      <Shop productsData={data}></Shop>
    </div>
  );
};

export default ShopContainer;
