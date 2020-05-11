import { ActionTypes } from 'actions/types';
import dishesAPI from 'api/dishesAPI';
import { Dispatch } from 'redux';
import { IDishesList, FetchDishesAction, setSearchAction } from 'interfaces';

export const fetchDishes = () => async (dispatch: Dispatch) => {
  dispatch<FetchDishesAction>({ type: ActionTypes.API_DISHES_REQUEST });
  try {
    const response = await dishesAPI.get<IDishesList[]>('/latest');

    dispatch<FetchDishesAction>({
      type: ActionTypes.API_DISHES_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch<FetchDishesAction>({
      type: ActionTypes.API_DISHES_FAILURE,
      error: error.toString(),
    });
  }
};

export const setCurrentSearch = (value: string) => (dispatch: Dispatch) => {
  dispatch<setSearchAction>({
    type: ActionTypes.SET_CURRENT_SEARCH,
    payload: value,
  });
};

export const addNewDish = (newDish: IDishesList) => async (
  dispatch: Dispatch
) => {
  dispatch<FetchDishesAction>({ type: ActionTypes.API_DISHES_REQUEST });
  try {
    const response = await dishesAPI.get<IDishesList[]>('/latest');

    const newLibrary = [newDish].concat(response.data);
    const responseAfterPut = await dishesAPI.put('/', newLibrary);

    console.log(responseAfterPut, 'responseAfterPut');
    console.log(response, 'response');

    const reponsePut = responseAfterPut.data.data;
    dispatch<FetchDishesAction>({
      type: ActionTypes.API_ADD_NEW_DISH_SUCCESS,
      payload: reponsePut,
    });
  } catch (error) {
    dispatch<FetchDishesAction>({
      type: ActionTypes.API_DISHES_FAILURE,
      error: error.toString(),
    });
  }
};
