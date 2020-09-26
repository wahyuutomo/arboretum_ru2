import { FETCH_PEOPLE_COUNT } from './urls';


export async function fetchPeopleCount(){
    return await fetch(
      FETCH_PEOPLE_COUNT,
      {
        method:'GET',
        headers: { 
          'Content-Type': 'application/json', 
        }
      }).then(response => {
        return response.json()
    })
  }