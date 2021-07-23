import createDataContext from "./createDataContext";
import blogApi from "../api/blogApi";

const categoryReducer = (state, action) => {
   switch (action.type) {

      case 'get_categories':
         return { state }
      case 'clear_error_message':
         return { ...state, errorMessage: '' }
      case 'signout':
         return { token: null, errorMessage: '' }
      case 'post_category':
         return { response: action.payload }

      default:
         return state;
   }
}

// const tryLocalSignin = (dispatch) => async () => {
//    const token = await AsyncStorage.getItem('token');
//    if (token) {
//       dispatch({ type: 'signin', payload: token });
//       navigate('TrackList');
//    } else {
//       navigate('Signin');
//    }
// }

// const signUp = (dispatch) => {
//    return async ({ email, password }, callback) => {
//       try {
//          const response = await trackerApi.post('/signup', { email, password });
//          await AsyncStorage.setItem('token', response.data.token);
//          console.log(response.data);
//          dispatch({ type: 'signin', payload: response.data.token });

//          navigate('TrackList');

//       } catch (error) {
//          dispatch({ type: 'add_error', payload: 'Somethings gone wrong with sign up!' });
//          console.log(error.message)
//       }
//    }
// }


const postCategory = (dispatch) => async (dataToSend) => {
   console.log("posting")
   try {
      const response = await blogApi.post("/categories", dataToSend)
         .then(res => {
            console.log("resStatus for posting :" + res.status)
            dispatch({ type: 'post_category', payload: res.status });
         })
   } catch (error) {
      // seterrorMessage('Something went wrong :(')
      // console.log("resStatus for posting :" + error)
      dispatch({ type: 'post_category', payload: error });

      return res.status;
   }
}


export const { Provider, Context } = createDataContext(
   categoryReducer,
   { postCategory })