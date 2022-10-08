export const DROP_MENU_VALIDATOR = '@user/dropdownLogin';
export const SET_USER_LOGIN = '@user/set-login';
export const SET_ALL_DATAUSER = '@user/set-data-user';
export const SET_PROFILE_PHOTO = '@user/set-profile-photo';

const initialState = {
  dropdown: false,
  profilePhoto:
    'https://res.cloudinary.com/dvthwktqe/image/upload/v1665209002/latam-airlines-clone/e7xdm7h1ho6fobxu65xp.png',
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
    case SET_PROFILE_PHOTO:
      return {
        ...state,
        profilePhoto: action.payload,
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
        profilePhoto: action.payload.profilePhoto,
      };
    default:
      return state;
  }
};
export default userReducer;
