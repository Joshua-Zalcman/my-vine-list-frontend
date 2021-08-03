import { useReducer, createContext } from 'react';
import {
	getUserFromToken,
	removeTokenFromStorage,
} from '../actions/token_actions';
import Reducer from './Reducer';

//initial state
const initialState = {
	userInfo: {},
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	//token actions
	//check for token and login
	async function checkForToken() {
		const token = localStorage.getItem('token');
		if (token) {
			const user = await getUserFromToken();
			dispatch({
				type: 'CHECK_FOR_USER_TOKEN',
				payload: user,
			});
		}
	}
	//logout
	function logoutUser() {
		removeTokenFromStorage();
		const user = {};
		dispatch({
			type: 'LOGOUT_USER',
			payload: user,
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				userInfo: state.userInfo,
				checkForToken,
				logoutUser,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
