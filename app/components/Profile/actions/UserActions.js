import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; 
import {
	USER_UPDATE,
	USER_CREATE,
	USERS_FETCH_SUCCESS,
	USER_SAVE_SUCCESS
} from './types';
export const userUpdate = ({ prop, value }) => {
	return {
		type: USER_UPDATE,
		payload: { prop, value }
	}
};

export const userCreate = ({ car, number, dateCar, dateOil })	=> {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users`)
			.push({ car, number, dateCar, dateOil })
			.then(() => {
				dispatch({ type: USER_CREATE });
				Actions.main({ type: 'reset' });
			});
	};
};

export const usersFetch = () => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users`)
			.on('value', snapshot => { 
				dispatch({ type: USERS_FETCH_SUCCESS, payload: snapshot.val() });
			});
	};
};

export const userSave = ({ car, number, dateCar, dateOil, uid }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`)
			.push({ car, number, dateCar, dateOil })
			.then(() => {
				dispatch({ type: USER_SAVE_SUCCESS });
				Actions.mainuserinfo({ type: 'reset' });
			});
	};
};

export const userDelete = ({ uid }) => {
	const { currentUser } = firebase.auth();

	return () => {
		firebase.database().ref(`/allUsers/${currentUser.uid}/users/${uid}`)
		.remove()
		.then(() => {
			Actions.mainuserinfo({ type: 'reset' });
		});
	};
};
