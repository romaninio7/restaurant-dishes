import { ActionTypes } from 'actions/types';
import { FormStateMap } from 'redux-form';

export interface IDishesList {
  name: string;
  ingredients: IIngredients[];
}

export interface IDishesState {
  fetching: boolean;
  dishes: IDishesList[];
  error?: string;
}

export interface FetchDishesAction {
  type:
    | ActionTypes.API_DISHES_REQUEST
    | ActionTypes.API_DISHES_SUCCESS
    | ActionTypes.API_ADD_NEW_DISH_SUCCESS
    | ActionTypes.API_DISHES_FAILURE;
  payload?: IDishesList[];
  error?: string;
}

export interface IStore {
  dishesState: IDishesState;
  currentSearch: string;
  form: FormStateMap;
}

export interface setSearchAction {
  type: ActionTypes.SET_CURRENT_SEARCH;
  payload: string;
}

export interface ModalContentProps {
  onDismiss: () => void;
  onFormSubmit: (formValues: IFormValues) => void;
}

export interface ModalProps extends ModalContentProps {
  openModal: boolean;
}

export interface IIngredients {
  name: string;
  weight: number | string;
}

export interface IFormValues {
  name: string;
  ingredients: IIngredients[];
}

export type TErrors = {
  name: string;
  ingredients: any;
};

export interface ICustomFormProps {
  onFormSubmit: (formValues: IFormValues) => void;
}
