export const DROP_MENU_VALIDATOR = '@user/dropdownLogin';
export const SET_USER_LOGIN = '@user/set-login';
export const SET_ALL_DATAUSER = '@user/set-data-user';

const initialState = {
  dropdown: false,
  country: '',
  documentType: '',
  documentNumber: '',
  name: 'Jairo',
  lastname: 'Toro',
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
    case SET_USER_LOGIN:
      return {
        ...state,
        isLogin: !state.isLogin,
      };
    case SET_ALL_DATAUSER:
      return state;
    default:
      return state;
  }
};
export default userReducer;
