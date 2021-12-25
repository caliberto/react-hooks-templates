export function itemsReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ITEMS_REQUEST':
    case 'ITEMS_SUCCESS':
    case 'ITEMS_ERROR':
      state.items = { ...payload };
      break;
    default:
      return state;
  }

  return state;
}

export function itemReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case 'ITEM_REQUEST':
    case 'ITEM_SUCCESS':
    case 'ITEM_ERROR':
      state.item = { ...payload };
      break;
    default:
      return state;
  }

  return state;
}

