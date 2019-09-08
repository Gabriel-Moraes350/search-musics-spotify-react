export default function cart(state = 0, action) {
  switch (action.type) {
    case '@favorites/NEW': {
      return state + action.number;
    }
    case '@favorites/READ': {
      return action.number;
    }
    default:
      return state;
  }
}
