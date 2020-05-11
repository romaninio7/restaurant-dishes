import { combineReducers } from 'redux';
import dishesState from 'reducers/dishes';
import currentSearch from 'reducers/search';
import { IStore } from 'interfaces';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers<IStore>({
  dishesState,
  currentSearch,
  form: formReducer,
});

export default allReducers;
