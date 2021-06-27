import axios from "axios"
import { Dispatch } from "redux"
import { PopulationAction, PopulationActionTypes } from "../../types/population"

export const fetchPopulation = (region = 'asia') => {
  return async (dispatch: Dispatch<PopulationAction>) => {
    try {
      dispatch({type: PopulationActionTypes.FETCH_POPULATION})
      const response = await axios.get(`https://restcountries.eu/rest/v2/region/${region}`)
      setTimeout(() => {
        dispatch({type: PopulationActionTypes.FETCH_POPULATION_SUCCESS, payload: response.data})
      },300);
    } catch (error) {
      dispatch(
        {
          type:PopulationActionTypes.FETCH_POPULATION_ERROR , 
          payload:  'Произошла ошибка при загрузке данных об этом регионе'
        })
    }
  }
}

export function setPopulationRegion(region: string): PopulationAction {
  return {type: PopulationActionTypes.SET_POPULATION_REGION, payload: region}
}
