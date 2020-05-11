import React from 'react';
import { connect } from 'react-redux';

const TotalWeight = ({ values }): JSX.Element | null => {
  const countSum = () => {
    return values.ingredients.reduce((sum: number, current) => {
      if (!current.weight) {
        if (!sum) {
          return 'Total weight';
        }
        return sum;
      }
      if (isNaN(Number(current.weight)) && current.weight) {
        return <span>Invalid weight</span>;
      }
      if (current.weight > 5000) {
        return <span>It's too heavy :)</span>;
      }
      return Number(current.weight) + sum;
    }, 0);
  };

  if (values && values.ingredients && values.ingredients.length > 0) {
    return (
      <div className='ui right floated labeled button'>
        <div className='ui icon button'>
          <i className='dolly icon'></i>
        </div>
        <span className='ui basic label'>{countSum()}</span>
      </div>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return { values: state.form['add-dish-form'].values };
};
export default connect(mapStateToProps)(TotalWeight);
