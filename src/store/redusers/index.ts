import { combineReducers } from "redux";
import { populationReducer } from "./populationReducer";




export const rootReducer = combineReducers({
  population: populationReducer,
})

export type RootState = ReturnType<typeof rootReducer>
