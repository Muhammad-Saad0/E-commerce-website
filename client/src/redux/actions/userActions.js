import { SET_ID } from "../constants/cartConstants";

export const setId = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};
