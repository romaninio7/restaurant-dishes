import { ActionTypes } from 'actions/types';
import { IDishesState, FetchDishesAction } from 'interfaces';
import * as consts from 'consts';

const initialDishesState: IDishesState = {
  fetching: false,
  dishes: consts.defaultDishesList,
  error: '',
};

export default (
  state: IDishesState = initialDishesState,
  action: FetchDishesAction
): IDishesState => {
  switch (action.type) {
    case ActionTypes.API_DISHES_REQUEST:
      return { ...state, fetching: true };

    case ActionTypes.API_DISHES_SUCCESS:
      return {
        ...state,
        fetching: false,
        dishes: [...state.dishes, ...action.payload],
      };

    case ActionTypes.API_ADD_NEW_DISH_SUCCESS:
      return {
        ...state,
        fetching: false,
        dishes: [...action.payload, ...state.dishes],
      };

    case ActionTypes.API_DISHES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};
