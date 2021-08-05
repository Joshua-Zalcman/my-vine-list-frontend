import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import React from 'react';

const ProfilePage = () => {
	const { userInfo } = useContext(GlobalContext);

  
	return (
		<div>
			<p>Username: {userInfo.username}</p>
			<p>Email: {userInfo.email}</p>
		</div>
	);
};

export default ProfilePage;
