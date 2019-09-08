export default function cart(state = '', action) {
  switch (action.type) {
    case '@search/CHANGE': {
      return action.search;
    }
    default:
      return state;
  }
}
