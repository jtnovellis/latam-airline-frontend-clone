export const DROP_MENU_VALIDATOR = '@user/dropdownLogin';

const initialState = {
  dropdown: false,
  country: '',
  documentType: '',
  documentNumber: '',
  name: '',
  lastname: '',
  birthdate: '',
  genre: '',
  phoneNumber: '',
  email: '',
  password: '',
  terms: false,
  privacity: false,
  isLogin: false,
};
const userReducer = (state = initialState, action) => {
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
export default userReducer;
