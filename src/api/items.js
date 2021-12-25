import { itemAction } from '../context/actions';
import { checkResponseStatus } from './utility';

export const fetchItem = async (dispatch, id) => {
  const { request, success, error } = itemAction;

  dispatch(request());

  await fetch(`${window.REACT_APP_URL_SERVER}/{url}/${id}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
      .then((data) => checkResponseStatus(data))
      .then((data)=> dispatch(success(data)))
      .catch((err) => dispatch(error(err)));
};