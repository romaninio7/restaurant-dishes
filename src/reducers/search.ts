import { ActionTypes } from 'actions/types';
import { setSearchAction } from 'interfaces';

const initialSearchState = '';

export default (
  state: string = initialSearchState,
  action: setSearchAction
): string => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_SEARCH:
      return action.payload;
    default:
      return state;
  }
};
