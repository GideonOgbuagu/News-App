import { FETCH_US_NEWS, FETCH_WORLD_NEWS, FETCH_SCIENCE_NEWS, FETCH_ARTS_NEWS, FETCH_HOME_NEWS } from "../actions/newsActions";

export const initialState = {
  stories: [],
  isLoading: false,
  error: "",
};

export const newsReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_US_NEWS:
      return {
        ...state,
        stories: action.payload,
      };
    case FETCH_WORLD_NEWS:
      return {
        ...state,
        stories: action.payload,
      };
    case FETCH_SCIENCE_NEWS:
      return {
        ...state,
        stories: action.payload,
      };
    case FETCH_ARTS_NEWS:
      return {
        ...state,
        stories: action.payload,
      };
    case FETCH_HOME_NEWS:
      return {
        ...state,
        stories: action.payload,
      };
    default:
      return state;
  }
};
