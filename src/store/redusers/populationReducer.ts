import { PopulationAction, PopulationActionTypes, PopulationState } from "../../types/population";

const initialState: PopulationState = {
  population: [],
  loading: false,
  error: null, 
  region: 'asia',
}

export const populationReducer = (state = initialState, action: PopulationAction): PopulationState => {
  switch (action.type) {
    
    case PopulationActionTypes.FETCH_POPULATION:
      return {...state, loading: true }
    case PopulationActionTypes.FETCH_POPULATION_SUCCESS:
      return {...state, loading: false, population: action.payload}
    case PopulationActionTypes.FETCH_POPULATION_ERROR:
      return {...state, loading: false, error: action.payload}
    case PopulationActionTypes.SET_POPULATION_REGION:
      return {...state, region: action.payload}
  
    default:
      return state;
  }
}
