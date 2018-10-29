import R from 'ramda';
import { Reducer } from 'redux';

const workouts: Reducer = (state = [], action) => {
  console.log('action', action);
  switch (action.type) {
    case 'ADD_WORKOUT':
      return [...state, action.payload];
    case 'UPDATE_WORKOUT_NAME':
      return R.map(
        R.when(
          R.propEq('id', action.payload.id),
          R.assoc('name', action.payload.name),
        ),
      )(state);
    default:
      return state;
  }
};
export default workouts;
