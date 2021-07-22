import createDataContext from "./createDataContext";
import blogApi from "../api/blogApi";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const categoryReducer = (state, action) => {
   switch (action.type) {

      case 'get_categories':
         return { state }
      case 'clear_error_message':
         return { ...state, errorMessage: '' }
      case 'signout':
         return { token: null, errorMessage: '' }
      default:
         return state;
   }
}

const tryLocalSignin = (dispatch) => async () => {
   const token = await AsyncStorage.getItem('token');
   if (token) {
      dispatch({ type: 'signin', payload: token });
      navigate('TrackList');
   } else {
      navigate('Signin');
   }
}

const signUp = (dispatch) => {
   return async ({ email, password }, callback) => {
      try {
         const response = await trackerApi.post('/signup', { email, password });
         await AsyncStorage.setItem('token', response.data.token);
         console.log(response.data);
         dispatch({ type: 'signin', payload: response.data.token });

         navigate('TrackList');

      } catch (error) {
         dispatch({ type: 'add_error', payload: 'Somethings gone wrong with sign up!' });
         console.log(error.message)
      }
   }
}

const clearErrorMessage = (dispatch) => () => {
   dispatch({ type: 'clear_error_message' })
}

const signIn = (dispatch) => {
   return async ({ email, password }, callback) => {
      try {
         const response = await trackerApi.post('/signin', { email, password });
         await AsyncStorage.setItem('token', response.data.token);
         dispatch({ type: 'signin', payload: response.data.token });

         navigate('TrackList');

      } catch (error) {
         dispatch({ type: 'add_error', payload: 'Check your email or password!' });
         console.log(error.message)
      }
   }
}

const signOut = (dispatch) => async () => {
   await AsyncStorage.removeItem('token');
   dispatch({ type: 'signout' });
   navigate('Signin');
}


export const { Provider, Context } = createDataContext(
   authReducer,
   { signUp, signIn, clearErrorMessage, tryLocalSignin, signOut },
   { token: null, errorMessage: '' }
)