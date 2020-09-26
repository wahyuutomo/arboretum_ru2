import { FETCH_PEOPLE_COUNTER } from "./actionTypes";

export const fetchPeopleCounter = data => ({
	type: FETCH_PEOPLE_COUNTER,
	payload: data
});