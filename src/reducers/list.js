let initialState = {
  items: []
}

export function ListReducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_LIST_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case 'REMOVE_LIST_ITEM':
      return {
        ...state,
        items: [...state.items.slice(0, state.items.length > 0 ? state.items.length - 1 : 0)]
      }
    default:
      return state;
  }
}