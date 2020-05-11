import React from 'react';
import { Field, FieldArray, reduxForm, InjectedFormProps } from 'redux-form';
import RenderInput from 'components/dialog/dishForm/RenderInput';
import RenderIngredients from 'components/dialog/dishForm/RenderIngredients';
import TotalWeight from 'components/dialog/dishForm/TotalWeight';
import { IDishesList, TErrors, ICustomFormProps } from 'interfaces';

const AddDishForm: React.FunctionComponent<
  ICustomFormProps & InjectedFormProps<IDishesList, ICustomFormProps>
> = (props): JSX.Element => {
  const { handleSubmit, reset, pristine, submitting, onFormSubmit } = props;

  const onAddNewDish = (formValues: IDishesList): void => {
    onFormSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit(onAddNewDish)} className='ui form'>
      <Field name='name' component={RenderInput} label='Enter a dish name' />
      <FieldArray name='ingredients' component={RenderIngredients} />
      <div className='ui divider'></div>
      <div>
        <button
          className='ui green ok inverted button'
          type='submit'
          disabled={pristine || submitting}
        >
          <i className='checkmark icon'></i> Submit
        </button>
        <button
          className='ui red cancel inverted button'
          type='button'
          disabled={pristine || submitting}
          onClick={reset}
        >
          <i className='remove icon'></i>Clear Values
        </button>
        <TotalWeight />
      </div>
    </form>
  );
};

const validate = (formValues: IDishesList): TErrors => {
  const errors = {} as TErrors;
  if (!formValues.name) {
    errors.name = 'Please enter a valid name';
  }

  if (!formValues.ingredients || !formValues.ingredients.length) {
    errors.ingredients = { _error: 'At least one ingredient must be entered' };
  }
  return errors;
};

export default reduxForm<IDishesList, ICustomFormProps>({
  form: 'add-dish-form',
  validate,
})(AddDishForm);
