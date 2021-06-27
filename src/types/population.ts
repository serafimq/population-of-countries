export interface PopulationState {
  population: any[];
  loading: boolean;
  error: null | string;
  region: string;
  
}

export enum PopulationActionTypes {
  FETCH_POPULATION = 'FETCH_POPULATION', 
  FETCH_POPULATION_SUCCESS = 'FETCH_POPULATION_SUCCESS', 
  FETCH_POPULATION_ERROR = 'FETCH_POPULATION_ERROR', 
  SET_POPULATION_REGION = 'SET_POPULATION_REGION', 
}

export interface FetchPopulationAction {
  type: PopulationActionTypes.FETCH_POPULATION
}
export interface FetchPopulationSuccessAction {
  type: PopulationActionTypes.FETCH_POPULATION_SUCCESS;
  payload: any[];
}
export interface FetchPopulationErrorAction {
  type: PopulationActionTypes.FETCH_POPULATION_ERROR;
  payload: string;
}
export interface setPopulationsRegion {
  type: PopulationActionTypes.SET_POPULATION_REGION;
  payload: string;
}

export type PopulationAction = 
FetchPopulationAction 
| FetchPopulationSuccessAction 
| FetchPopulationErrorAction 
| setPopulationsRegion
