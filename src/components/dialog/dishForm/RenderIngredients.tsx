import React from 'react';
import { Field } from 'redux-form';

const required = (value) => (value ? undefined : 'This field is required');
const number = (value) =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const tooHeavy = (value) =>
  value && value > 5000 ? "It seems to be too heavy, doesn't it?" : undefined;

const renderName = ({ input, label, meta }): JSX.Element => {
  const className = `ten wide field ${
    meta.error && meta.touched ? 'error' : ''
  }`;
  return (
    <div className={className}>
      <input
        {...input}
        autoComplete='off'
        placeholder={meta.error && meta.touched ? meta.error : label}
      />
    </div>
  );
};

const renderWeight = ({ input, label, meta }): JSX.Element => {
  const className = `ui right labeled input eight wide field ${
    meta.error && meta.touched ? 'error' : ''
  }`;
  return (
    <div className={className}>
      <input
        {...input}
        autoComplete='off'
        placeholder={meta.error && meta.touched ? meta.error : label}
      />
      <div className='ui basic label'>g</div>
    </div>
  );
};

const renderLine = (ingredient, index, fields): JSX.Element => (
  <div key={index} className='fields'>
    <Field
      name={`${ingredient}.name`}
      type='text'
      component={renderName}
      label='Ingredient'
      validate={[required]}
    />
    <Field
      name={`${ingredient}.weight`}
      type='text'
      component={renderWeight}
      label='Weight in grams'
      validate={[required, number, tooHeavy]}
    />
    <div className='four wide field'>
      <button
        type='button'
        className='circular ui right floated icon button'
        onClick={() => fields.remove(index)}
      >
        <i className='close icon'></i>
      </button>
    </div>
  </div>
);
const RenderIngredients = ({ fields, meta }): JSX.Element => {
  return (
    <div className='ui segment' style={{ maxHeight: 300, overflowY: 'scroll' }}>
      <p>
        <strong>Add ingredient's name and weight in grams</strong>
      </p>
      {fields.length > 0 && <>{fields.map(renderLine)}</>}
      <div
        className='ui'
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      >
        <button
          type='button'
          onClick={() => fields.push({})}
          className='ui circular orange icon button'
        >
          <i className='plus icon'></i>
        </button>
      </div>
      {meta.submitFailed && meta.error && (
        <div className='ui form small header error red center aligned'>
          {meta.error}
        </div>
      )}
    </div>
  );
};

export default RenderIngredients;
