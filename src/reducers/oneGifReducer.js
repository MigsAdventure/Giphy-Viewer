export default function (state = [], action) {
  switch (action.type) {
    case 'GET_GIF_FULFILLED' :
      return action.payload.data;
    default:
      return state;
  }
}
