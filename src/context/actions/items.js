import { initialState } from '../reducers/config';

const itemsRequest = () => {
  return {
    type: 'ITEMS_REQUEST',
    payload: { ...initialState.items, isFetching: true },
  };
};

const itemsSuccess = ({ message, data }) => {
  return {
    type: 'ITEMS_SUCCESS',
    payload: { ...initialState.items, message, data, isFetched: true },
  };
};

const itemsError = ({ message }) => {
  return {
    type: 'ITEMS_ERROR',
    payload: { ...initialState.items, message, isFetched: true },
  };
};

export const itemsActions = {
  request: itemsRequest,
  success: itemsSuccess,
  error: itemsError,
};

const itemRequest = () => {
  return {
    type: 'ITEM_REQUEST',
    payload: { ...initialState.item, isFetching: true },
  };
};

const itemSuccess = ({ message, data }) => {
  return {
    type: 'ITEM_SUCCESS',
    payload: { ...initialState.item, message, data, isFetched: true },
  };
};

const itemError = ({ message }) => {
  return {
    type: 'ITEM_ERROR',
    payload: { ...initialState.item, message, isFetched: true },
  };
};

export const itemActions = {
  request: itemRequest,
  success: itemSuccess,
  error: itemError,
};
