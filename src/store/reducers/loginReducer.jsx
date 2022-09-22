export const DROP_MENU_VALIDATOR = '@user/dropdownLogin';

const initialState = {
  dropdown: false,
  country: '',
  documentType: '',
  documentNumber: 0,
  name: '',
  lastname: '',
  birthdate: '',
  genre: '',
  phoneNumber: 0,
  email: '',
  password: '',
  terms: false,
  privacity: false,
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case DROP_MENU_VALIDATOR:
      return {
        ...state,
        dropdown: !state.dropdown,
      };
    default:
      return state;
  }
};
export default loginReducer;
