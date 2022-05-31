import { Action, createReducer, on } from "@ngrx/store";
import { setBreadCrumb } from "../actions/bread-crumb.action";

export const initialState: string = 'Courses'
 
const _breadCrumbReducer = createReducer(
    initialState, 
     on(setBreadCrumb, (state, {payload}) => payload))

    export function breadCrumbReducer(state: any , action: Action ){
        return _breadCrumbReducer(state, action)
    }