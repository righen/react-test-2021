import * as actions from ".";

/* eslint-disable import/prefer-default-export */
export const saveNewEmployee = employee => dispatch => {
  console.log("test");
  dispatch(actions.saveNewEmployee(employee));
};
