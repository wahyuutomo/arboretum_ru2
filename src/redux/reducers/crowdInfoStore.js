import { FETCH_PEOPLE_COUNTER } from "../actionTypes";

const initialState = {
	data: [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ]
}

export default function(state = initialState, action){
	switch (action.type){
		case FETCH_PEOPLE_COUNTER: {
			return {
				...state,
				data: action.payload
			};
		}
		default:
			return state;
	}
}