import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state=> state.authentication.user);
	return (
		<div>
			{user && user.user.username}
			<br/>
			{user && user.token}
		</div>
	)
}

export default Home;