const initialState = {
  isLoading: false,
  foodList: [],
  error: undefined
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case "FOOD_LOADING":
      return {
        ...state,
        isLoading: true,
        error: false
      };
    case "FOOD_SUCCESS":
      return {
        ...state,
        isLoading: false,
        error: false,
        foodList: action.data
      };
    case "FOOD_FAILED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
}
