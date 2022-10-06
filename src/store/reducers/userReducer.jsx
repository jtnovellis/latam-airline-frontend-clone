export const DROP_MENU_VALIDATOR = '@user/dropdownLogin';
export const SET_USER_LOGIN = '@user/set-login';
export const SET_ALL_DATAUSER = '@user/set-data-user';

const initialState = {
  dropdown: false,
  name: '',
  lastname: '',
  country: '',
  documentType: '',
  documentNumber: '',
  email: '',
  password: '',
  birthdate: '',
  genre: '',
  phoneNumber: '',
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
      return {
        ...state,
        country: action.payload.country,
        documentType: action.payload.documentType,
        documentNumber: action.payload.documentNumber,
        name: action.payload.firstname,
        lastname: action.payload.lastname,
        email: action.payload.email,
        password: action.payload.password,
      };
    default:
      return state;
  }
};
export default userReducer;
