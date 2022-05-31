import { createAction, props  } from "@ngrx/store";

export const setBreadCrumb = createAction('[BreadCrumb Component] SetBreadCrumb', props<{ payload: string }>());