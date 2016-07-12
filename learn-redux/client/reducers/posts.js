// a reducer takes in 2 things:

// 1: the action (info about what happened)
// 2: copy of current state


function posts(state = [], action) {

  switch(action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return [
        ...state.slice(0,i), // before what we are updatin
        { ...state[i], likes: ++state[i].likes },
        ...state.slice(i + 1)
      ]
    default:
      return state;
  }
  return state;
}
export default posts;
