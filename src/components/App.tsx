import React from 'react';
import DishesHeader from 'components/header/DishesHeader';
import DishesWrapper from 'components/body/DishesWrapper';

const App = (): JSX.Element => {
  return (
    <div className=''>
      <DishesHeader />
      <DishesWrapper />
    </div>
  );
};

export default App;
