import { itemReducer, itemsReducer } from './items';

const initialState = {
  // for example
  item: {
    message: '',
    data: {}
  },
  items: {
    message: '',
    data: []
  }
};

const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce(
        (acc, prop) => {
          return ({
            ...acc,
            ...reducers[prop]({ [prop]: acc[prop] }, action),
          });
        },
        state,
    );
  };
};

const appReducers = combineReducers({
  //for example
  item: itemReducer,
  items: itemsReducer
});

export {
  initialState,
  appReducers,
};
