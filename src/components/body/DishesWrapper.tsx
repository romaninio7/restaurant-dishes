import React from 'react';
import AddDichesPanel from 'components/header/AddDishesPanel';
import DishesList from 'components/body/DishesList';

const DishesWrapper = (): JSX.Element => {
  return (
    <div className='ui container'>
      <AddDichesPanel />
      <DishesList />
    </div>
  );
};

export default DishesWrapper;
